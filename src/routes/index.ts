import StatusController from '../controllers/status';
import { RouteOptions } from 'fastify';
import { DecoratedFastifyInstance } from '../server';

export default function initRoutes(
  serverInstance: DecoratedFastifyInstance
): RouteOptions[] {
  const status: RouteOptions = {
    method: 'GET',
    url: '/status',
    handler: new StatusController(serverInstance).getStatus,
  };

  const routes = [status];
  return routes;
}
