"use server";

import { unstable_cache } from "next/cache";

import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

/**
 * Fetches projects from a Notion database and formats them.
 *
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of formatted project objects.
 *
 * @throws Will log an error message to the console if fetching projects fails.
 */
export const getProjects = unstable_cache(async () => {
  const databaseId = "199fb82e047b804aa8e0cc1d4b5592d8";
  try {
    const projects = await notion.databases.query({
      database_id: databaseId,
    });

    const formattedProjects = projects.results.map((project) => ({
      id: project.id,
      name: project.properties.name?.rich_text[0]?.plain_text,
      description: project.properties.description?.rich_text[0]?.plain_text,
      githubUrl: project.properties.github_url?.rich_text[0]?.plain_text,
      images: {
        light: project.properties.light_image_url?.rich_text[0]?.plain_text,
        dark: project.properties.dark_image_url?.rich_text[0]?.plain_text,
      },
      webUrl: project.properties.web_url?.rich_text[0]?.plain_text,
      skills: project.properties.skills?.multi_select,
      createdAt: project.properties?.created_at?.date?.start,
      isArchived: project.properties?.is_archived.checkbox,
    }));

    return formattedProjects;
  } catch (error) {
    console.error("Error fetching projects from Notion:", error);
    return [];
  }
});
