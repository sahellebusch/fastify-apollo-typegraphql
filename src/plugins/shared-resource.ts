import fp from 'fastify-plugin';
import { FastifyInstance } from 'fastify';

interface SharedResource {
  resource: object;
  name: string;
}

function sharedResource(
  fastify: FastifyInstance,
  opts: SharedResource,
  done: Function
): void {
  try {
    const { name, resource } = opts;
    fastify.decorate(name, resource);
    done();
  } catch (error) {
    done(error);
  }
}

export default fp(sharedResource, {
  name: 'shared-resource',
});
