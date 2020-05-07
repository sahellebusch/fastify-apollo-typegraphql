import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export default class Project {
  @Field(_type => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  created: Date;

  @Field()
  updated: Date;
}
