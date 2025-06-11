FROM node:18-alpine AS base
ARG VITE_GMAPS_KEY
ENV VITE_GMAPS_KEY=${VITE_GMAPS_KEY}
WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY vite.config.ts tsconfig*.json index.html ./
COPY public ./public

FROM base AS dev
WORKDIR /app

EXPOSE 3000
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3000"]
