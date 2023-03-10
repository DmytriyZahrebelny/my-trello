import { Request as Req, Response as Res } from 'express';

export type Request<Body = Record<string, unknown>> = Req<Record<string, unknown>, Record<string, unknown>, Body>;
export type Response<Data = unknown> = Res<Data, { userId: string }>;
