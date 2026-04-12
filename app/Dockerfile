FROM node:18
WORKDIR /app
COPY . .
CMD ["node", "server.js"]
HEALTHCHECK CMD curl --fail http://localhost:3000/health || exit 1
