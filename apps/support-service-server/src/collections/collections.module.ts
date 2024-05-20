import { Module } from "@nestjs/common";
import { CollectionsModuleBase } from "./base/collections.module.base";
import { CollectionsService } from "./collections.service";
import { CollectionsController } from "./collections.controller";
import { CollectionsResolver } from "./collections.resolver";

@Module({
  imports: [CollectionsModuleBase],
  controllers: [CollectionsController],
  providers: [CollectionsService, CollectionsResolver],
  exports: [CollectionsService],
})
export class CollectionsModule {}
