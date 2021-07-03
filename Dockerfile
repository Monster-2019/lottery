FROM node:lts-alpine as builder

RUN mkdir -p /app 
WORKDIR /app

COPY ./package.json ./
RUN npm install

COPY . .
RUN npm run build 

FROM nginx:stable-alpine

EXPOSE 3001

RUN mkdir -p /build

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/build /build