import { Articles } from "../articles/Articles";

export type Collections = {
  articlesItems?: Array<Articles>;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
