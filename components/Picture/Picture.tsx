import Image from "next/image";

import { cn } from "@/lib/utils";

import type { PictureProps } from "./Picture.types";

const Picture = ({
  image,
  imageDark,
  quality,
  width,
  height,
  alt,
  className,
}: PictureProps) => {
  return (
    <>
      <Image
        src={image}
        alt={alt}
        width={width}
        height={height}
        className={cn(imageDark && "block dark:hidden", className)}
        priority
        quality={quality || 100}
      />
      {imageDark && (
        <Image
          src={imageDark}
          alt={alt}
          width={width}
          height={height}
          className={cn("hidden dark:block", className)}
          priority
          quality={quality || 100}
        />
      )}
    </>
  );
};

export default Picture;
