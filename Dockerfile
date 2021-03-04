FROM node

WORKDIR /usr/src/gehenna

COPY . .

RUN npm install && npm run build

EXPOSE 80

CMD [ "npm", "start" ]