import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const n2m = new NotionToMarkdown({ notionClient: notion });

const getWorkExperienceContent = async (blockId) => {
  const mdblocks = await n2m.pageToMarkdown(blockId);
  const mdString = n2m.toMarkdownString(mdblocks);

  return mdString;
};

export const getWorkExperience = async () => {
  const databaseId = "199fb82e047b80a8a88ac6edd1f39f93";
  const workExperience = await notion.databases.query({
    database_id: databaseId,
  });

  const workExperienceWithContent = await Promise.all(
    workExperience.results.map(async (result) => {
      const content = await getWorkExperienceContent(result.id);
      return {
        id: result.id,
        companyName: result.properties.company_name.title[0].plain_text,
        companyUrl: result.properties.site_url.url,
        employmentType: result.properties.employment_type.select.name,
        location: result.properties.location.rich_text[0].plain_text,
        date: result.properties.date.date,
        isCurrent: result.properties.is_current.checkbox,
        position: result.properties.position.rich_text[0].plain_text,
        description: result.properties.description.rich_text[0].plain_text,
        skills: result.properties.skills.multi_select,
        content,
      };
    })
  );

  return workExperienceWithContent;
};
