import fp from 'fastify-plugin';
import { FastifyInstance } from 'fastify';

interface SharedResource {
  obj: object;
  name: string;
}

function sharedResource(
  fastify: FastifyInstance,
  opts: SharedResource,
  done: Function
): void {
  try {
    const { name, obj } = opts;
    fastify.decorate(name, obj);
    done();
  } catch (error) {
    done(error);
  }
}

export default fp(sharedResource, {
  name: 'shared-resource',
});
