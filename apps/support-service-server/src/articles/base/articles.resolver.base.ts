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
import { Articles } from "./Articles";
import { ArticlesCountArgs } from "./ArticlesCountArgs";
import { ArticlesFindManyArgs } from "./ArticlesFindManyArgs";
import { ArticlesFindUniqueArgs } from "./ArticlesFindUniqueArgs";
import { CreateArticlesArgs } from "./CreateArticlesArgs";
import { UpdateArticlesArgs } from "./UpdateArticlesArgs";
import { DeleteArticlesArgs } from "./DeleteArticlesArgs";
import { Collections } from "../../collections/base/Collections";
import { ArticlesService } from "../articles.service";
@graphql.Resolver(() => Articles)
export class ArticlesResolverBase {
  constructor(protected readonly service: ArticlesService) {}

  async _articlesItemsMeta(
    @graphql.Args() args: ArticlesCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Articles])
  async articlesItems(
    @graphql.Args() args: ArticlesFindManyArgs
  ): Promise<Articles[]> {
    return this.service.articlesItems(args);
  }

  @graphql.Query(() => Articles, { nullable: true })
  async articles(
    @graphql.Args() args: ArticlesFindUniqueArgs
  ): Promise<Articles | null> {
    const result = await this.service.articles(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Articles)
  async createArticles(
    @graphql.Args() args: CreateArticlesArgs
  ): Promise<Articles> {
    return await this.service.createArticles({
      ...args,
      data: {
        ...args.data,

        collection: args.data.collection
          ? {
              connect: args.data.collection,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Articles)
  async updateArticles(
    @graphql.Args() args: UpdateArticlesArgs
  ): Promise<Articles | null> {
    try {
      return await this.service.updateArticles({
        ...args,
        data: {
          ...args.data,

          collection: args.data.collection
            ? {
                connect: args.data.collection,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => Articles)
  async deleteArticles(
    @graphql.Args() args: DeleteArticlesArgs
  ): Promise<Articles | null> {
    try {
      return await this.service.deleteArticles(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Collections, {
    nullable: true,
    name: "collection",
  })
  async getCollection(
    @graphql.Parent() parent: Articles
  ): Promise<Collections | null> {
    const result = await this.service.getCollection(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}