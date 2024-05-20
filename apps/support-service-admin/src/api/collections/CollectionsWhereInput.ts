import { ArticlesListRelationFilter } from "../articles/ArticlesListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CollectionsWhereInput = {
  articlesItems?: ArticlesListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
