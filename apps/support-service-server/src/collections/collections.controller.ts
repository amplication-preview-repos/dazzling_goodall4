import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CollectionsService } from "./collections.service";
import { CollectionsControllerBase } from "./base/collections.controller.base";

@swagger.ApiTags("collections")
@common.Controller("collections")
export class CollectionsController extends CollectionsControllerBase {
  constructor(protected readonly service: CollectionsService) {
    super(service);
  }
}
