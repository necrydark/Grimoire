import { Weapon } from "./weapons";

export type Character = {
  id?: string;
  name: string;
  imageUrl: string;
  weapons?: Weapon[];
  subtitle?: string;
  description?: string;
  isNew?: boolean;
  releaseDate?: Date;
};
