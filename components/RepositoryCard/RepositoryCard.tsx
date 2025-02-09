import { Star } from "lucide-react";
import type { RestEndpointMethodTypes } from "@octokit/plugin-rest-endpoint-methods";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(advancedFormat);

type RepositoryCardProps = {
  repository: RestEndpointMethodTypes["repos"]["listForUser"]["response"]["data"][number];
};

const RepositoryCard = ({ repository }: RepositoryCardProps) => {
  const { created_at, forks, stargazers_count } = repository;
  const hasForks = Boolean(forks && forks > 0);
  const hasStar = Boolean(stargazers_count && stargazers_count > 0);

  const createdAt = dayjs(created_at).format("Do MMMM YYYY"); // Format Example: 1st January 2000
  return (
    <div className="w-full min-h-[90px] rounded-lg p-3 border text-sm transition-all duration-150 hover:bg-muted/50">
      <a
        href={repository.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-2">
            <h2 className="text-base font-medium">{repository.name}</h2>
            {hasStar && (
              <p className="flex items-center gap-1 text-foreground ml-auto">
                <Star size={12} />
                {stargazers_count}
              </p>
            )}
          </div>

          {repository.description && (
            <p className="text-xs text-muted-foreground mt-1">
              {repository.description}
            </p>
          )}

          <div className="flex items-center gap-2 text-xs text-muted-foreground mt-auto pt-2">
            {repository.language && (
              <p className="px-2 py-1 rounded bg-secondary">
                {repository.language}
              </p>
            )}
            {hasForks && <p>{forks} forks</p>}
            <p className="ml-auto">{createdAt}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default RepositoryCard;
