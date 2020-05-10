import fastify, { FastifyInstance } from 'fastify';
import { ApolloServer } from 'apollo-server-fastify';
import ProjectResolver from './graphql/resolvers/project';
import initRoutes from './routes';
import { buildSchema } from 'type-graphql';
import sharedResource from './plugins/shared-resource';
import Config from './lib/config';

export interface DecoratedFastifyInstance extends FastifyInstance {
  config?: Config;
}

export default async function buildServer(
  config: Config
): Promise<DecoratedFastifyInstance> {
  const server = fastify({
    logger: { level: config.get('LOG_LEVEL') },
  }) as DecoratedFastifyInstance;

  server.register(sharedResource, { resource: config, name: 'config' });

  initRoutes(server).forEach(route => {
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
