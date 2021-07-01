FROM node:lts-alpine as builder

RUN mkdir -p /app 
WORKDIR /app

COPY ./package.json ./
RUN npm install

COPY . .
RUN npm install && npm run build 

FROM nginx:stable-alpine

EXPOSE 80

RUN mkdir -p /etc/nginx/ssl

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html