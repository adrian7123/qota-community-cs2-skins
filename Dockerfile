FROM node:23-alpine AS builder
WORKDIR /qota-community-skins

RUN npm install -g pnpm

COPY package.json package-lock.json* ./
RUN pnpm i --prod

COPY . .

RUN npm run build

FROM node:23-alpine

WORKDIR /qota-community-skins

COPY --from=builder /qota-community-skins/.output ./
COPY --from=builder /qota-community-skins/.env ./

EXPOSE 3004

CMD ["node", "server/index.mjs"]
