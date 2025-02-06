import { Star } from "lucide-react";

const RepositoryCard = () => {
  return (
    <div className="w-full min-h-[90px] rounded-lg p-2 border text-sm transition-all duration-100 hover:bg-muted/50">
      <a href="/" target="_blank" rel="noopener noreferrer" className="block">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h2 className="text-base font-medium">Lorem, ipsum dolor.</h2>
            <p className="flex items-center gap-1 text-foreground ml-auto">
              <Star size={12} /> 2
            </p>
          </div>
          <p className="text-xs text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            optio architecto? Tempora quibusdam commodi facilis?
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
            <p>TypeScript</p>
            <p className="ml-auto">2 forks</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default RepositoryCard;
