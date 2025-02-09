import type { StaticImageData } from "next/image";

export type PictureProps = {
  image: string | StaticImageData;
  imageDark?: string | StaticImageData;
  quality?: number;
  width?: number;
  height?: number;
  alt: string;
  className?: string;
};
