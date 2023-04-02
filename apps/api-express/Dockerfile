FROM node:lts-alpine as base
WORKDIR /usr/src/app
ARG PORT
ENV PORT ${PORT}
EXPOSE ${PORT}
RUN npm install --global pnpm
ENV PNPM_HOME=/usr/src/app
ENV PATH=$PATH:$PNPM_HOME

FROM base as sources
COPY package.json pnpm-*.yaml tsconfig.json ./
COPY packages/ ./packages/
COPY apps/api-express/ ./apps/api-express/

FROM base as dev
COPY .prettierrc .prettierignore .eslintignore ./
COPY --from=sources usr/src/app/packages/ ./packages/
COPY --from=sources usr/src/app/package.json usr/src/app/pnpm-*.yaml usr/src/app/tsconfig.json ./
COPY --from=sources usr/src/app/apps/api-express/ ./apps/api-express/
ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV}
RUN pnpm install --filter api-express --frozen-lockfile
CMD [ "pnpm", "api:dev" ]

FROM sources as builder
ENV NODE_ENV development
RUN pnpm install --filter api-express --frozen-lockfile
RUN pnpm api:build

FROM base as prod
COPY --from=sources usr/src/app/package.json usr/src/app/pnpm-*.yaml ./
COPY --from=sources usr/src/app/apps/api-express/package.json ./apps/api-express/
COPY --from=sources usr/src/app/packages/ ./packages/
COPY --from=builder usr/src/app/apps/api-express/build/ ./apps/api-express/build
ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV}
RUN pnpm install --filter api-express --prod
CMD [ "node", "apps/api-express/build/server.js" ]
