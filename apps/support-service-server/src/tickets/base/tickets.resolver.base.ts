/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Tickets } from "./Tickets";
import { TicketsCountArgs } from "./TicketsCountArgs";
import { TicketsFindManyArgs } from "./TicketsFindManyArgs";
import { TicketsFindUniqueArgs } from "./TicketsFindUniqueArgs";
import { CreateTicketsArgs } from "./CreateTicketsArgs";
import { UpdateTicketsArgs } from "./UpdateTicketsArgs";
import { DeleteTicketsArgs } from "./DeleteTicketsArgs";
import { TicketsService } from "../tickets.service";
@graphql.Resolver(() => Tickets)
export class TicketsResolverBase {
  constructor(protected readonly service: TicketsService) {}

  async _ticketsItemsMeta(
    @graphql.Args() args: TicketsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Tickets])
  async ticketsItems(
    @graphql.Args() args: TicketsFindManyArgs
  ): Promise<Tickets[]> {
    return this.service.ticketsItems(args);
  }

  @graphql.Query(() => Tickets, { nullable: true })
  async tickets(
    @graphql.Args() args: TicketsFindUniqueArgs
  ): Promise<Tickets | null> {
    const result = await this.service.tickets(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Tickets)
  async createTickets(
    @graphql.Args() args: CreateTicketsArgs
  ): Promise<Tickets> {
    return await this.service.createTickets({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Tickets)
  async updateTickets(
    @graphql.Args() args: UpdateTicketsArgs
  ): Promise<Tickets | null> {
    try {
      return await this.service.updateTickets({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Tickets)
  async deleteTickets(
    @graphql.Args() args: DeleteTicketsArgs
  ): Promise<Tickets | null> {
    try {
      return await this.service.deleteTickets(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}