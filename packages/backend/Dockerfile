FROM node:19-bullseye
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install --global pnpm
RUN pnpm install
COPY . /usr/src/app/
ARG PORT=4000
ENV PORT ${PORT}
EXPOSE ${PORT}
CMD [ "node", "server.ts" ]
