import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

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
const getWorkExperienceContent = async (blockId) => {
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
const parseWorkExperience = async (workExperience) => {
  const content = await getWorkExperienceContent(workExperience.id);

  return {
    id: workExperience.id,
    companyName: workExperience.properties.company_name?.title[0].plain_text || "",
    companyUrl: workExperience.properties.site_url.url || "",
    employmentType: workExperience.properties.employment_type.select.name || "",
    location: workExperience.properties.location.rich_text[0].plain_text || "",
    date: workExperience.properties.date.date || null,
    isCurrent: workExperience.properties.is_current.checkbox || false,
    position: workExperience.properties.position.rich_text[0].plain_text || "",
    description: workExperience.properties.description.rich_text[0].plain_text || "",
    skills: workExperience.properties.skills.multi_select || [],
    content,
  };
};

/**
 * Fetches work experience data and content, from a Notion database and parses it.
 *
 * @returns {Promise<any[]>} A promise that resolves to an array of parsed work experience data.
 *
 * @throws Will log an error message to the console if there is an issue fetching data from Notion.
 */
export const getWorkExperience = async () => {
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
};
