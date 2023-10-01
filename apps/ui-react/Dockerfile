FROM node:18.16.1-bullseye-slim as base
WORKDIR /usr/src/app
ARG PORT
ENV PORT ${PORT}
EXPOSE ${PORT}
RUN npm install --global pnpm
ENV PNPM_HOME=/usr/src/app
ENV PATH=$PATH:$PNPM_HOME

FROM base as sources
COPY package.json pnpm-*.yaml tsconfig.json .eslintignore .eslintrc ./
COPY packages/ ./packages/
COPY apps/ui-react/ ./apps/ui-react/

FROM base as dev
COPY .prettierrc .prettierignore .eslintrc .eslintignore ./
COPY --from=sources usr/src/app/packages/ ./packages/
COPY --from=sources usr/src/app/package.json usr/src/app/pnpm-*.yaml usr/src/app/tsconfig.json ./
COPY --from=sources usr/src/app/apps/ui-react/ ./apps/ui-react/
ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV}
RUN pnpm install --filter ui-react --frozen-lockfile
CMD [ "pnpm", "ui-react" ]

FROM sources as builder
ENV NODE_ENV development
RUN pnpm install --filter ui-react --frozen-lockfile
RUN pnpm ui-react:build

FROM base as prod
COPY --from=sources usr/src/app/package.json usr/src/app/pnpm-*.yaml ./
COPY --from=sources usr/src/app/apps/ui-react/package.json ./apps/ui-react/
COPY --from=sources usr/src/app/packages/ ./packages/
COPY --from=builder usr/src/app/apps/ui-react/build/ ./apps/ui-react/build
ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV}
RUN pnpm install --filter ui-react --prod

