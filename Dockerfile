FROM node:21-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./
COPY tsconfig.json ./
COPY svelte.config.js ./
COPY vite.config.ts ./
RUN npm install && npm cache clean --force

COPY . .

EXPOSE 5173

CMD ["npm", "run", "host"]