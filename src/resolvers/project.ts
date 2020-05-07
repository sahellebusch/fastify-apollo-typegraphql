import {Arg, Query, Resolver, Int} from 'type-graphql';
import Project from '../schemas/Project';

export interface ProjectData {
  id: number;
  name: string;
}

@Resolver(of => Project)
export default class {
  @Query(returns => Project, {nullable: true})
  async projectById(@Arg('id', type => Int) id: number): Promise<Project | undefined> {
    return {id: 1, name: 'first project', created: new Date(), updated: new Date()};
  }
}
