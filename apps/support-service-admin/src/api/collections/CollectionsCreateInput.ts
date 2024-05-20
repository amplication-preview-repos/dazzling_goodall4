import { ArticlesCreateNestedManyWithoutCollectionsItemsInput } from "./ArticlesCreateNestedManyWithoutCollectionsItemsInput";

export type CollectionsCreateInput = {
  articlesItems?: ArticlesCreateNestedManyWithoutCollectionsItemsInput;
  description?: string | null;
  name?: string | null;
};
