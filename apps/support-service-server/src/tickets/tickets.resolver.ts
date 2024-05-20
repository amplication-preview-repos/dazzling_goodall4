import * as graphql from "@nestjs/graphql";
import { TicketsResolverBase } from "./base/tickets.resolver.base";
import { Tickets } from "./base/Tickets";
import { TicketsService } from "./tickets.service";

@graphql.Resolver(() => Tickets)
export class TicketsResolver extends TicketsResolverBase {
  constructor(protected readonly service: TicketsService) {
    super(service);
  }
}
