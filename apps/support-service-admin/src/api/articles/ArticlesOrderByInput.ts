import { SortOrder } from "../../util/SortOrder";

export type ArticlesOrderByInput = {
  collectionId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
