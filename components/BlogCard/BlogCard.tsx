import Link from "next/link";
import Picture from "../Picture/Picture";

const BlogCard = () => {
  return (
    <Link href="/">
      <article className="w-full h-full max-w-lg rounded-xl overflow-hidden border group bg-background hover:bg-muted/50 transition">
        <div className="w-full aspect-[8/5] overflow-hidden">
          <Picture
            image="https://picsum.photos/200/111"
            imageDark="https://picsum.photos/200/111"
            width={200}
            height={111}
            quality={100}
            alt="Lorem Picsum"
            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-all duration-300"
          />
        </div>
        <div className="p-3">
          <h2 className="text-xl font-semibold font-heading">
            Lorem, ipsum dolor.
          </h2>
          <div className="flex items-center gap-2 flex-wrap mt-2">
            {["Lorem", "Lorem", "Lorem"].map((tag) => (
              <p
                key={tag}
                className="px-2 py-1 rounded-lg bg-muted text-muted-foreground text-xs cursor-pointer"
              >
                {tag}
              </p>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            veniam aut alias mollitia cupiditate inventore ipsa dolore quasi
            soluta rem eaque voluptatum asperiores ut, vitae impedit dolor
            aspernatur libero.
          </p>
          <div className="w-full flex justify-end">
            <p className="text-xs mt-2 px-2 py-1 rounded bg-secondary">
              20th June 2022
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
