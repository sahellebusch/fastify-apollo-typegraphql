import { FastifyRequest } from 'fastify';
import { DecoratedFastifyInstance } from '../server';
import Config from '../lib/config';

interface StatusResponse {
  status: 'ok';
}

export default class StatusController {
  private config: Config;

  constructor(serverInstance: DecoratedFastifyInstance) {
    this.config = serverInstance.config;
  }

  async getStatus(request: FastifyRequest): Promise<StatusResponse> {
    request.log.info('Status route called', this.config);
    return { status: 'ok' };
  }
}
