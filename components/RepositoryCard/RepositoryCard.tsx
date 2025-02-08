import { Star } from "lucide-react";
import { RestEndpointMethodTypes } from "@octokit/plugin-rest-endpoint-methods";

type RepositoryCardProps = {
  repository: RestEndpointMethodTypes["repos"]["listForUser"]["response"]["data"][number];
};

const RepositoryCard = ({ repository }: RepositoryCardProps) => {
  const { forks, stargazers_count } = repository;

  const hasForks = Boolean(forks && forks > 0);
  const hasStar = Boolean(stargazers_count && stargazers_count > 0);

  return (
    <div className="w-full min-h-[90px] rounded-lg p-2 border text-sm transition-all duration-100 hover:bg-muted/50">
      <a
        href={repository.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h2 className="text-base font-medium">{repository.name}</h2>
            {hasStar && (
              <p className="flex items-center gap-1 text-foreground ml-auto">
                <Star size={12} />
                {stargazers_count}
              </p>
            )}
          </div>
          <p className="text-xs text-muted-foreground">
            {repository.description}
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
            <p>{repository.language}</p>
            {hasForks && <p className="ml-auto">{forks} forks</p>}
          </div>
        </div>
      </a>
    </div>
  );
};

export default RepositoryCard;
