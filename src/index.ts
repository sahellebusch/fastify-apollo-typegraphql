import 'reflect-metadata';
import buildServer, { DecoratedFastifyInstance } from './server';
import Config from './lib/config';

const config: Config = Config.init();

let server: DecoratedFastifyInstance;
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
