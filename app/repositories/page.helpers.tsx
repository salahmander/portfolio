import type { RestEndpointMethodTypes } from "@octokit/plugin-rest-endpoint-methods";

type repository = RestEndpointMethodTypes["repos"]["listForUser"]["response"]["data"][number];
 

/**
 * Sorts an array of repository objects by their creation date in descending order.
 *
 * @param {repository[]} repositoriesData - An array of repository objects to be sorted.
 * @returns {repository[]} The sorted array of repository objects.
 */
export const sortRepositoriesByDate = (repositoriesData: repository[]) => {
  return repositoriesData.sort((a, b) => {
    const dateA = a.created_at ? new Date(a.created_at).getTime() : 0;
    const dateB = b.created_at ? new Date(b.created_at).getTime() : 0;
    return dateB - dateA;
  });
};