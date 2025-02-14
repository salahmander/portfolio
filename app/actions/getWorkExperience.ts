import { unstable_cache } from "next/cache";

import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

import type { WorkExperience } from "@/components/JobCard/JobCard.types";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const n2m = new NotionToMarkdown({ notionClient: notion });

/**
 * Fetches and converts Notion page content to a Markdown string.
 *
 * @param {string} blockId - The ID of the Notion block to fetch content from.
 * @returns {Promise<string | null>} A promise that resolves to the Markdown string of the Notion content, or null if an error occurs.
 *
 * @throws Will log an error message to the console if fetching the Notion content fails.
 */
export const getWorkExperienceContent = async (blockId: string) => {
  try {
    const mdblocks = await n2m.pageToMarkdown(blockId);
    const mdString = n2m.toMarkdownString(mdblocks);

    return mdString;
  } catch (error) {
    console.error("Error fetching Notion content:", error);
    return null;
  }
};

/**
 * Parses the work experience object and retrieves its detailed content.
 *
 * @param workExperience - The work experience object to parse.
 * @returns A promise that resolves to an object containing parsed work experience details.
 *
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseWorkExperience = async (workExperience: any) => {
  const content = await getWorkExperienceContent(workExperience.id);

  const { properties } = workExperience;

  const parsedWorkExperience: WorkExperience = {
    id: workExperience.id,
    companyName: properties.company_name.title[0].plain_text || "",
    companyUrl: properties.site_url.url || "",
    employmentType: properties.employment_type.select.name || "",
    location: properties.location.rich_text[0].plain_text || "",
    date: properties.date.date || null,
    isCurrent: properties.is_current.checkbox || false,
    position: properties.position.rich_text[0].plain_text || "",
    description: properties.description.rich_text[0].plain_text || "",
    skills: properties.skills.multi_select || [],
    content,
  };

  return parsedWorkExperience;
};

/**
 * Fetches work experience data and content, from a Notion database and parses it.
 *
 * @returns {Promise<WorkExperience[]>} A promise that resolves to an array of parsed work experience data.
 *
 * @throws Will log an error message to the console if there is an issue fetching data from Notion.
 */
export const getWorkExperience = unstable_cache(async () => {
  const databaseId = "199fb82e047b80a8a88ac6edd1f39f93";
  try {
    const workExperience = await notion.databases.query({
      database_id: databaseId,
    });

    const workExperienceWithContent = await Promise.all(
      workExperience.results.map(
        async (result) => await parseWorkExperience(result)
      )
    );
    return workExperienceWithContent;
  } catch (error) {
    console.error("Error fetching work experience from notion:", error);
    return [];
  }
});
