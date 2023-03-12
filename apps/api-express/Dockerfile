FROM node:19-bullseye
WORKDIR /usr/src/app
COPY ../../package.json \
     ../../pnpm-lock.yaml \
     ../../pnpm-workspace.yaml \
     ../../tsconfig.json \
     ../../.prettierrc \
     ../../.prettierignore \
     ../../.eslintignore \
     ../../packages \
     /usr/src/app/
COPY package.json /usr/src/app/api-express/
RUN npm install --global pnpm
ENV PNPM_HOME=/usr/src/app
ENV PATH=$PATH:$PNPM_HOME
RUN pnpm add -g typescript
ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV}
WORKDIR /usr/src/app/apps/api-express
COPY ./apps/api-express /usr/src/app/apps/api-express
WORKDIR /usr/src/app
ARG PORT
ENV PORT ${PORT}
EXPOSE ${PORT}
RUN if [ "$NODE_ENV" = "development" ]; \
        then pnpm install --frozen-lockfile; \
        else pnpm install --prod; \
        fi
CMD [ "pnpm", "run", "start:dev" ]

