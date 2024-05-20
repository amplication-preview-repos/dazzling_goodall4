import { CollectionsWhereUniqueInput } from "../collections/CollectionsWhereUniqueInput";

export type ArticlesCreateInput = {
  collection?: CollectionsWhereUniqueInput | null;
  content?: string | null;
  title?: string | null;
};
