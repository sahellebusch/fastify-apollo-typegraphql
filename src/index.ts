import server from "./server";

const start = async (): Promise<void> => {
  try {
    await server.listen(3001);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
