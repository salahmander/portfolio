"use server";

import { unstable_cache } from "next/cache";

import { Octokit } from "octokit";

// A list of repository names to be excluded
const excludeRepositoriesList = [
  "salahmander",
  "304CEM-web-api",
  "340CT-software-quality",
  "206CDE-Real-World-Project",
  "207se",
  "260CT",
  "MyCourseWork",
];

export const getRepositories = unstable_cache(async () => {
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
  const { data } = await octokit.rest.repos.listForUser({
    username: "salahmander",
    per_page: 50,
    type: "owner",
    direction: "desc",
    sort: "pushed",
  });

  const repositories = data.filter(
    (repository) =>
      !repository.fork && !excludeRepositoriesList.includes(repository.name)
  );

  return repositories;
});

