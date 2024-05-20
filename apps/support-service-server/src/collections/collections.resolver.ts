import * as graphql from "@nestjs/graphql";
import { CollectionsResolverBase } from "./base/collections.resolver.base";
import { Collections } from "./base/Collections";
import { CollectionsService } from "./collections.service";

@graphql.Resolver(() => Collections)
export class CollectionsResolver extends CollectionsResolverBase {
  constructor(protected readonly service: CollectionsService) {
    super(service);
  }
}
