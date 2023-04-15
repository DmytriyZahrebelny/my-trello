import path from 'path';
import dotenv from 'dotenv';

interface EnvEnvironments {
  DB_HOST: string;
  DB_PORT: number;
  DB_USER: string;
  DB_PASSWORD: string;
  DB_NAME: string;
  ACCESS_TOKEN_SECRET: string;
  REFRESH_TOKEN_SECRET: string;
  PORT: string;
  NODE_ENV: 'development' | 'production';
}

const isLocalEnvironment = process.env.NODE_ENV !== 'production' || (process.env.NODE_ENV as string) !== 'development';
const envOutput = isLocalEnvironment ? dotenv.config({ path: path.resolve(process.cwd(), '../../.env') }).parsed : {};

export const config = {
  DB_HOST: 'localhost' || process.env.DB_HOST,
  DB_PORT: Number(envOutput?.DB_PORT) || Number(process.env.DB_PORT),
  DB_USER: envOutput?.DB_USER || process.env.DB_USER,
  DB_PASSWORD: envOutput?.DB_PASSWORD || process.env.DB_PASSWORD,
  DB_NAME: envOutput?.DB_NAME || process.env.DB_NAME,
  ACCESS_TOKEN_SECRET: envOutput?.ACCESS_TOKEN_SECRET || process.env.ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET: envOutput?.REFRESH_TOKEN_SECRET || process.env.REFRESH_TOKEN_SECRET,
  PORT: envOutput?.PORT || process.env.PORT,
  NODE_ENV: isLocalEnvironment ? 'development' : process.env.NODE_ENV,
} as EnvEnvironments;
