FROM node:19-bullseye
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install --global pnpm
ENV PNPM_HOME=/usr/src/app
ENV PATH=$PATH:$PNPM_HOME
ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV}
RUN if [ "$NODE_ENV" = "development" ]; \
        then pnpm install; \
        else pnpm install --prod; \
        fi
COPY . /usr/src/app/
ARG PORT
ENV PORT ${PORT}
EXPOSE ${PORT}
CMD [ "pnpm", "start" ]
