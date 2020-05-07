import fastify, {FastifyRequest,  FastifyReply} from 'fastify' 
import { ServerResponse } from "http";
import routes from './routes';

const server = fastify({logger: true});

routes.forEach(route => {
	server.route(route);
});

export default server;
