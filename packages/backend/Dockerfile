FROM node:alpine

RUN echo "building backend"
RUN mkdir tabs
WORKDIR /tabs
COPY ./ /tabs/
RUN npm install
RUN npm run build

EXPOSE ${PORTS}giu

CMD ["npm", "dev"]