FROM node:12.10 as build
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY . .
RUN yarn build

FROM node:12.10 as runtime
WORKDIR /app
COPY --from=build /app/dist /app/dist
COPY --from=build /app/package.json /app/package.json
COPY --from=build /app/static /app/static
ENV NODE_ENV docker
EXPOSE 3000
CMD ["yarn", "start:last"]