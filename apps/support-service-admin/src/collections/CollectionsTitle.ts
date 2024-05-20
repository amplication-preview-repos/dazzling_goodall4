import { Collections as TCollections } from "../api/collections/Collections";

export const COLLECTIONS_TITLE_FIELD = "name";

export const CollectionsTitle = (record: TCollections): string => {
  return record.name?.toString() || String(record.id);
};
