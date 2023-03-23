import { lazy } from 'react';

export const Board = lazy(() => import('./board' as string).then((module) => ({ default: module.Board })));
