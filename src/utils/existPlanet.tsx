import { Planet } from "../types/types";

export function exitPlanet(data: Planet, listPlanet: Planet[]): boolean {
  return listPlanet.includes(data);
}
