import fastify, { FastifyInstance } from 'fastify';
import { ApolloServer } from 'apollo-server-fastify';
import ProjectResolver from './graphql/resolvers/project';
import routes from './routes';
import { buildSchema } from 'type-graphql';

import * as http from 'http';

export default async function buildServer(): Promise<
  FastifyInstance<http.Server, http.IncomingMessage, http.ServerResponse>
> {
  const server = fastify({ logger: true });

  routes.forEach(route => {
    server.route(route);
  });

  const schema = await buildSchema({
    resolvers: [ProjectResolver],
    emitSchemaFile: true,
  });
  const apolloServer = new ApolloServer({
    schema,
  });

  server.register(apolloServer.createHandler());
  return server;
}
