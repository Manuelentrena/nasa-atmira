//Global
import { NUM_PLANETARY } from "../constant/globalData";

//Dependencies
import createUrl from "./createUrl";
import getDateLessDays from "./getDateLessDays";

export default function createListUrls(): string[] {
  let ListUrls: string[] = [];

  for (let i = 0; i < NUM_PLANETARY; i++) {
    ListUrls?.push(createUrl(getDateLessDays(i)));
  }

  return ListUrls;
}
