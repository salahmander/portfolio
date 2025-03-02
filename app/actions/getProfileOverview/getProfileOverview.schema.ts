import { z } from "zod";

// Define a schema for Notion multi-select options
export const MultiSelectOptionSchema = z.object({
  id: z.string(),
  name: z.string(),
  color: z.string(),
});

// Define schemas for title and rich_text items
export const TitleItemSchema = z.object({
  plain_text: z.string(),
});
export const RichTextItemSchema = z.object({
  plain_text: z.string(),
});

// Define the schema for the properties in your profile page
export const ProfilePropertiesSchema = z.object({
  name: z.object({ title: z.array(TitleItemSchema) }),
  tag_line: z.object({ rich_text: z.array(RichTextItemSchema) }),
  interest: z.object({ multi_select: z.array(MultiSelectOptionSchema) }),
  frontend: z.object({ multi_select: z.array(MultiSelectOptionSchema) }),
  backend: z.object({ multi_select: z.array(MultiSelectOptionSchema) }),
  programming_languages: z.object({
    multi_select: z.array(MultiSelectOptionSchema),
  }),
  tools: z.object({ multi_select: z.array(MultiSelectOptionSchema) }),
  agile_methodologies: z.object({
    multi_select: z.array(MultiSelectOptionSchema),
  }),
});

// Define the overall schema for the profile data
export const ProfileDataSchema = z.object({
  id: z.string(),
  properties: ProfilePropertiesSchema,
});
