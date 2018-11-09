FROM node
ADD . /bookstore
WORKDIR /bookstore
RUN npm install
CMD [ "npm", "server" ]
