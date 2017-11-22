FROM node:9.2.0-slim

RUN npm install --quiet --global \
      yarn \
      spa-http-server

RUN mkdir /code
COPY . /code

WORKDIR /code
RUN yarn install --force
RUN yarn run build

EXPOSE 8080
CMD http-server ./dist -p 8080 --push-state
