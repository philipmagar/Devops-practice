FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --only=production

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]


HEALTHCHECK CMD curl --fail http://localhost:3000/health || exit 1

CMD ["node", "server.js"]
