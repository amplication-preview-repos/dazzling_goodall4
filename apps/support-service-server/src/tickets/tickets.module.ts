import { Module } from "@nestjs/common";
import { TicketsModuleBase } from "./base/tickets.module.base";
import { TicketsService } from "./tickets.service";
import { TicketsController } from "./tickets.controller";
import { TicketsResolver } from "./tickets.resolver";

@Module({
  imports: [TicketsModuleBase],
  controllers: [TicketsController],
  providers: [TicketsService, TicketsResolver],
  exports: [TicketsService],
})
export class TicketsModule {}
