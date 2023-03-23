FROM node:19.4-alpine
WORKDIR /usr/src/app
COPY ../../package.json \
     ../../pnpm-lock.yaml \
     ../../pnpm-workspace.yaml \
     ../../tsconfig.json \
     ../../.prettierrc \
     ../../.prettierignore \
     ../../.eslintignore \
     /usr/src/app/
COPY package.json /usr/src/app/apps/ui-react/
RUN npm install --global pnpm
ENV PNPM_HOME=/usr/src/app
ENV PATH=$PATH:$PNPM_HOME
ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV}
WORKDIR /usr/src/app/apps/ui-react
COPY ./apps/ui-react /usr/src/app/apps/ui-react
WORKDIR /usr/src/app
ARG PORT
ENV PORT ${PORT}
EXPOSE ${PORT}
RUN if [ "$NODE_ENV" = "development" ]; \
        then pnpm install; \
        else pnpm install --prod; \
        fi
CMD [ "pnpm", "run", "ui-react" ]

