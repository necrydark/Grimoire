import { Weapon } from "./weapons";

export type Character = {
  id?: number;
  name: string;
  imageUrl: string;
  weapons?: Weapon[];
  subtitle?: string;
  description?: string;
  isNew?: boolean;
};
