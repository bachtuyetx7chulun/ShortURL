FROM node:14-alpine3.12
WORKDIR /user/scr/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "npm", "start" ]