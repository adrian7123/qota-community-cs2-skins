FROM node:18-alpine AS builder
WORKDIR /qota-community-skins

COPY package.json package-lock.json* ./
RUN npm i

COPY . .

RUN npm run build

FROM node:18-alpine

WORKDIR /qota-community-skins

COPY --from=builder /qota-community-skins/.output ./
COPY --from=builder /qota-community-skins/.env ./

EXPOSE 3004

CMD ["node", "server/index.mjs"]
