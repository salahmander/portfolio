import { MdStringObject } from "notion-to-md/build/types";

// Create a TypeScript type from schema
export type ProfileOverview = {
  id: string;
  name: string;
  tag_line: string;
  skills: {
    category: string;
    options: Array<{ id: string; name: string; color: string }>;
  }[];
  summary: MdStringObject;
};
