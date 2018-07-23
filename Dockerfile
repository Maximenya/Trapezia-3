FROM node:8
RUN mkdir -p /usr/src/trapezia
WORKDIR /usr/src/trapezia
COPY package.json /usr/src/trapezia/
RUN npm install
COPY . .
EXPOSE 3000
CMD [ “npm”, “start” ]