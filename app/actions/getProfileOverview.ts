"use server";

import { unstable_cache } from "next/cache";

import { NotionToMarkdown } from "notion-to-md";

import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const n2m = new NotionToMarkdown({ notionClient: notion });

/**
 * Fetches the profile overview from a Notion database and formats it into a structured object.
 *
 * @returns {Promise<Object>} A promise that resolves to an object containing the profile overview data.
 *
 * @throws Will throw an error if there is an issue fetching the profile overview from Notion.
 */
export const getProfileOverview = unstable_cache(async () => {
  const profileDatabaseId = "199fb82e047b80a6b52bcad731746199";
  try {
    const queryResponse = await notion.databases.query({
      database_id: profileDatabaseId,
    });

    const profileData = queryResponse.results[0];

    if (!profileData) {
      return [];
    }

    // Convert profile overview summary page to markdown
    const markdownBlocks = await n2m.pageToMarkdown(profileData.id);
    const summaryMarkdown = n2m.toMarkdownString(markdownBlocks);

    const { properties } = profileData;

    const skills = [
      { category: "Interest", options: properties.interest.multi_select },
      { category: "Frontend", options: properties.frontend.multi_select },
      { category: "Backend", options: properties.backend.multi_select },
      { category: "Programming Languages", options: properties.programming_languages.multi_select },
      { category: "Tools", options: properties.tools.multi_select },
      { category: "Agile Methodologies", options: properties.agile_methodologies.multi_select }
    ];

    const filterSkills = skills.filter((skill) => skill.options.length > 0)

    const formattedProfileOverview = {
      id: profileData.id,
      name: properties.name.title[0].plain_text,
      tag_line: properties.tag_line.rich_text[0].plain_text,
      skills: filterSkills,
      summary: summaryMarkdown,
    };

    return formattedProfileOverview;
  } catch (error) {
    console.error("Error fetching profile overview from Notion:", error);
    return [];
  }
});
