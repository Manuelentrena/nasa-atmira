export type Props = { children: any };

export type Planet = {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
};

export type PlanetContextType = {
  listPlanet: Planet[];
  addPlanet: (Planet: Planet) => void;
};
