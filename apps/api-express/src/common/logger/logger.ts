import { pino } from 'pino';

const Env = {
  DEVELOPMENT: `development`,
  PRODUCTION: `production`,
};
const LOG_FILE = `./api.log`;

const isDevMode = process.env.NODE_ENV === Env.DEVELOPMENT;
const defaultLogLevel = isDevMode ? `error` : `info`;

const logger = pino(
  {
    name: `base-logger`,
    level: process.env.LOG_LEVEL || defaultLogLevel,
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
      },
    },
  },
  isDevMode ? process.stdout : pino.destination(LOG_FILE)
);

export const getLogger = (options: Record<string, string> = {}) => {
  return logger.child(options);
};
