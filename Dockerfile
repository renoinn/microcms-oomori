FROM node:14.16.0-alpine
RUN apk add dumb-init
ENV NODE_ENV production

USER node

WORKDIR /app

COPY --chown=node:node .output/server server

EXPOSE 3000
CMD ["dumb-init", "node", "server/index.mjs"]
