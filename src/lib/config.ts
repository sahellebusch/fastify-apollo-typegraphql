import envSchema from 'env-schema';
import S, { ObjectSchema } from 'fluent-schema';

const pinoLogLevels = ['fatal', 'error', 'warn', 'debug', 'info', 'trace'];
const nodeEnvs = ['production', 'development'];

interface EnvironmentVars {
  [key: string]: string | number;
}

export default class Config {
  static readonly schema: ObjectSchema = S.object()
    .prop('NODE_ENV', S.string().enum(nodeEnvs).required())
    .prop('LOG_LEVEL', S.string().enum(pinoLogLevels).required());

  private env: EnvironmentVars;

  public static init(injectedEnv?: EnvironmentVars): Config {
    const options = {
      confKey: 'config', // optional, default: 'config'
      schema: this.schema,
      data: injectedEnv || process.env,
      dotenv: true,
    };

    return new Config(envSchema(options));
  }

  private constructor(env: EnvironmentVars) {
    this.env = env;

    console.log(env);
  }

  public has(prop: string): boolean {
    return !!this.env[prop];
  }

  public get(prop: string): string | number {
    if (!this.env[prop]) {
      throw new Error(`Property "${prop}" does not exist `);
    }

    return this.env[prop];
  }
}
