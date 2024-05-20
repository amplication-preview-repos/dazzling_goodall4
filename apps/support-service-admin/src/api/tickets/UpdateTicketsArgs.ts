import { TicketsWhereUniqueInput } from "./TicketsWhereUniqueInput";
import { TicketsUpdateInput } from "./TicketsUpdateInput";

export type UpdateTicketsArgs = {
  where: TicketsWhereUniqueInput;
  data: TicketsUpdateInput;
};
