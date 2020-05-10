import { Arg, Int, Query, Resolver } from 'type-graphql';
import Project from '../schemas/Project';
import { projects } from '../../data';

@Resolver(_of => Project)
export default class {
  @Query(_returns => Project, { nullable: true })
  async projectById(@Arg('id', _type => Int) id: number): Promise<Project | undefined> {
    return projects.find(p => p.id === id);
  }
}
