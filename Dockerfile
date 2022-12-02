FROM node:16-alpine

WORKDIR /core

ENV PATH="./node_modules/.bin:$PATH"

COPY . .

RUN npm run build

CMD ["npm", "run", "dev", "--", "--host"]