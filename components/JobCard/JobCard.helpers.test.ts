import { calculateJobDuration } from "./JobCard.helpers";
import dayjs from "dayjs";

describe("calculateJobDuration", () => {
    it("should return 'Less than a month' for durations less than a month", () => {
        const result = calculateJobDuration("2023-10-01", false, "2023-10-15");
        expect(result).toBe("Less than a month");
    });

    it("should return correct duration for a job that lasted several months", () => {
        const result = calculateJobDuration("2023-01-01", false, "2023-06-01");
        expect(result).toBe("6 mos");
    });

    it("should return correct duration for a job that lasted several years", () => {
        const result = calculateJobDuration("2020-01-01", false, "2023-01-01");
        expect(result).toBe("3 yrs");
    });

    it("should return correct duration for a job that lasted several years and months", () => {
        const result = calculateJobDuration("2020-01-01", false, "2023-06-01");
        expect(result).toBe("3 yrs 6 mos");
    });

    it("should return correct duration for a current job", () => {
        const startDate = dayjs().subtract(2, "years").subtract(3, "months").format("YYYY-MM-DD");
        const result = calculateJobDuration(startDate, true, "");
        expect(result).toBe("2 yrs 4 mos");
    });
});