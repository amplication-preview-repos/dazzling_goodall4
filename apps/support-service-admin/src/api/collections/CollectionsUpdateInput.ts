import { ArticlesUpdateManyWithoutCollectionsItemsInput } from "./ArticlesUpdateManyWithoutCollectionsItemsInput";

export type CollectionsUpdateInput = {
  articlesItems?: ArticlesUpdateManyWithoutCollectionsItemsInput;
  description?: string | null;
  name?: string | null;
};
