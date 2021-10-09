import { API_KEY, URL } from "../constant/globalData";

export default function createUrl(date: string): string {
  return `${URL}?api_key=${API_KEY}&date=${date}`;
}
