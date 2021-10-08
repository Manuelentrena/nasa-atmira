import dayjs from "dayjs";

export default function getDateLessDays(dayLess: number): string {
  const date = dayjs().subtract(dayLess, "day").format("YYYY-MM-DD");
  return date;
}
