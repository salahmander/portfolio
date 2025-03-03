import { z } from "zod";

// Define a schema for rich text items
export const RichTextItemSchema = z.object({
  plain_text: z.string(),
});

// Define a schema for multi-select options
export const MultiSelectOptionSchema = z.object({
  id: z.string(),
  name: z.string(),
  color: z.string(),
});

// Define the schema for project properties
export const ProjectPropertiesSchema = z.object({
  name: z.object({
    rich_text: z.array(RichTextItemSchema),
  }),
  description: z.object({
    rich_text: z.array(RichTextItemSchema),
  }),
  github_url: z.object({
    rich_text: z.array(RichTextItemSchema),
  }),
  light_image_url: z.object({
    rich_text: z.array(RichTextItemSchema),
  }),
  dark_image_url: z.object({
    rich_text: z.array(RichTextItemSchema),
  }),
  web_url: z.object({
    rich_text: z.array(RichTextItemSchema),
  }),
  skills: z.object({
    multi_select: z.array(MultiSelectOptionSchema),
  }),
  created_at: z.object({
    date: z.object({
      start: z.string(),
    }),
  }),
  is_archived: z.object({
    checkbox: z.boolean(),
  }),
});

// Define the overall project schema
export const ProjectSchema = z.object({
  id: z.string(),
  properties: ProjectPropertiesSchema,
});
