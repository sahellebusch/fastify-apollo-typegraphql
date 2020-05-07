import * as statusController from '../controllers/status';
import { RouteOptions } from 'fastify';

const status: RouteOptions = {
  method: 'GET',
  url: '/status',
  handler: statusController.getStatus,
};

const routes = [status];
export default routes;
