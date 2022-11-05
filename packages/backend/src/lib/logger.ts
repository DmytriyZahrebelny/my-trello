import { pino } from 'pino';

const Env = {
  DEVELOPMENT: `development`,
  PRODUCTION: `production`,
};

const isDevMode = process.env.NODE_ENV === Env.DEVELOPMENT;
const defaultLogLevel = isDevMode ? `info` : `info`;

const logger = pino({
  name: `base-logger`,
  level: process.env.LOG_LEVEL || defaultLogLevel,
  prettyPrint: isDevMode,
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
});

export const getLogger = (options: Record<string, string> = {}) => {
  return logger.child(options);
};
