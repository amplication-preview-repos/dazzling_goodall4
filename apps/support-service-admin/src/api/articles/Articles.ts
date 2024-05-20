import { Collections } from "../collections/Collections";

export type Articles = {
  collection?: Collections | null;
  content: string | null;
  createdAt: Date;
  id: string;
  title: string | null;
  updatedAt: Date;
};
