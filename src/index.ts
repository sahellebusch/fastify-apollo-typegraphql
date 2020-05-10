import 'reflect-metadata';
import buildServer from './server';
import { FastifyInstance } from 'fastify';
import * as http from 'http';
import Config from './lib/config';

const config: Config = Config.init();

let server: FastifyInstance<http.Server, http.IncomingMessage, http.ServerResponse>;
const start = async (): Promise<void> => {
  try {
    server = await buildServer(config);
    await server.listen(3002);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
