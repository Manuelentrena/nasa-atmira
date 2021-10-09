import dayjs from "dayjs";

export default function getDateLessDays(dayLess: number): string {
  return dayjs().subtract(dayLess, "day").format("YYYY-MM-DD");
}
