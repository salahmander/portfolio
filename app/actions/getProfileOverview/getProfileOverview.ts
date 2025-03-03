"use server";

import { unstable_cache } from "next/cache";

import { NotionToMarkdown } from "notion-to-md";

import { Client } from "@notionhq/client";

import type { ProfileOverview } from "./getProfileOverview.types";
import { ProfileDataSchema } from "./getProfileOverview.schema";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const n2m = new NotionToMarkdown({ notionClient: notion });

/**
 * Fetches the profile overview from a Notion database and formats it into a structured object.
 *
 * @returns {Promise<Object>} A promise that resolves to an object containing the profile overview data.
 *
 * @throws Will throw an error if there is an issue fetching the profile overview from Notion.
 */
export const getProfileOverview = unstable_cache(
  async (): Promise<ProfileOverview | null> => {
    const profileDatabaseId = "199fb82e047b80a6b52bcad731746199";
    try {
      const queryResponse = await notion.databases.query({
        database_id: profileDatabaseId,
      });

      const profileDataRaw = queryResponse.results.at(0);

      // Validate and parse the data using Zod
      const profileData = ProfileDataSchema.parse(profileDataRaw);

      // Convert profile overview summary page to markdown
      const markdownBlocks = await n2m.pageToMarkdown(profileData.id);
      const summaryMarkdown = n2m.toMarkdownString(markdownBlocks);

      const skills = [
        {
          category: "Interest",
          options: profileData.properties.interest.multi_select,
        },
        {
          category: "Frontend",
          options: profileData.properties.frontend.multi_select,
        },
        {
          category: "Backend",
          options: profileData.properties.backend.multi_select,
        },
        {
          category: "Programming Languages",
          options: profileData.properties.programming_languages.multi_select,
        },
        {
          category: "Tools",
          options: profileData.properties.tools.multi_select,
        },
        {
          category: "Agile Methodologies",
          options: profileData.properties.agile_methodologies.multi_select,
        },
      ];

      const filterSkills = skills.filter((skill) => skill.options.length > 0);

      return {
        id: profileData.id,
        name: profileData.properties.name.title[0]?.plain_text || "",
        tag_line:
          profileData.properties.tag_line.rich_text[0]?.plain_text || "",
        skills: filterSkills,
        summary: summaryMarkdown,
      };
    } catch (error) {
      console.error("Error fetching profile overview from Notion:", error);
      return null;
    }
  }
);
