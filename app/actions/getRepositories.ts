"use server";

import { Octokit } from "octokit";

const getRepositories = async () => {
    const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
    const { data } = await octokit.rest.repos.listForUser({
        username: "salahmander",
        per_page: 50,
        type: "owner",
        direction: "desc",
        sort: "pushed",
    });
    return data.filter((repository) => !repository.fork && repository.name !== "salahmander");
};

export default getRepositories;
