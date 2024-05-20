import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CollectionsServiceBase } from "./base/collections.service.base";

@Injectable()
export class CollectionsService extends CollectionsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
