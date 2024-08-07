FROM node:alpine

WORKDIR /app
COPY package.json ./
RUN npm install

# 必要なパッケージをインストール
RUN apk update && apk add --no-cache curl

COPY ./ ./

CMD ["node", "server.js"]