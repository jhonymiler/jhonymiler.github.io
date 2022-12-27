##### Stage 1
FROM node:18 as build
LABEL author="Jhony Miler"
WORKDIR /app
COPY . .

RUN yarn && yarn build

# STAGE 2
FROM nginx:latest AS ngi

COPY --from=build /app/build/ /usr/share/nginx/html
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
