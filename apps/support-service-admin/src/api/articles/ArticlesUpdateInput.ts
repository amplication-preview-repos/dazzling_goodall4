import { CollectionsWhereUniqueInput } from "../collections/CollectionsWhereUniqueInput";

export type ArticlesUpdateInput = {
  collection?: CollectionsWhereUniqueInput | null;
  content?: string | null;
  title?: string | null;
};
