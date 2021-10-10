import { ReactNode } from "react";

export type Props = { children: ReactNode };

export type Planet = {
  copyright?: string;
  date: string;
  explanation: string;
  hdurl?: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
};

export type PlanetContextType = {
  listPlanet: Planet[];
  addPlanet: (Planet: Planet) => void;
};

export type infoPlanet = { data: Planet; isLoading: boolean; isError: boolean };
