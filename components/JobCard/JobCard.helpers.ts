import dayjs from "dayjs";

/**
 * Calculates the duration of a job given the start date, end date, and whether the job is current.
 *
 * @param startDate - The start date of the job in string format.
 * @param endDate - The end date of the job in string format.
 * @param isCurrent - A boolean indicating if the job is current.
 * @returns A string representing the duration of the job in years and months.
 */
export const calculateJobDuration = (
  startDate: string,
  isCurrent: boolean,
  endDate?: string,
) => {
  const start = dayjs(startDate);
  const end = isCurrent ? dayjs() : dayjs(endDate);

  const diffInMonths = end.diff(start, "months");
  const years = Math.floor(diffInMonths / 12);
  const months = diffInMonths % 12;

  if (years === 0 && months === 0) return "Less than a month";

  const yearString = years > 0 ? `${years} yr${years > 1 ? "s" : ""}` : "";
  const monthString = months > 0 ? `${months} mo${months > 1 ? "s" : ""}` : "";

  const jobDuration = [yearString, monthString].filter(Boolean).join(" ");

  return jobDuration;
};
