import { CollectionsWhereUniqueInput } from "../collections/CollectionsWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ArticlesWhereInput = {
  collection?: CollectionsWhereUniqueInput;
  content?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
