# Stage 1 - Install Dependencies 
FROM node:12-alpine as node_cache

WORKDIR /cache/
COPY package*.json ./
RUN npm install

# Stage 2 - Builder root With
FROM node:12-alpine as builder
WORKDIR /usr/src/app
COPY . .
COPY --from=node_cache /cache/ .

ARG BUILD_CMD=notset

# Building app
RUN npm run $BUILD_CMD

# Stage 3
FROM nginx:1.19.10-alpine

COPY --from=builder /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
