import { CollectionsWhereInput } from "./CollectionsWhereInput";
import { CollectionsOrderByInput } from "./CollectionsOrderByInput";

export type CollectionsFindManyArgs = {
  where?: CollectionsWhereInput;
  orderBy?: Array<CollectionsOrderByInput>;
  skip?: number;
  take?: number;
};
