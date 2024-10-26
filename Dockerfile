### Stage 1: Build
FROM node:22.10.0 AS builder

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build


### Stage 2: Launch
FROM node:22.10.0 AS launch

WORKDIR /app

COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/.env ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

RUN yarn install --production --ignore-script

EXPOSE ${PORT}

CMD ["yarn", "start"]