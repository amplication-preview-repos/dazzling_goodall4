import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TicketsService } from "./tickets.service";
import { TicketsControllerBase } from "./base/tickets.controller.base";

@swagger.ApiTags("tickets")
@common.Controller("tickets")
export class TicketsController extends TicketsControllerBase {
  constructor(protected readonly service: TicketsService) {
    super(service);
  }
}
