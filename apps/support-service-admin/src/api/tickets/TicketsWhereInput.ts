import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TicketsWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  status?: "Option1";
  subject?: StringNullableFilter;
};
