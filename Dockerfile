FROM node:26-alpine3.24 AS base
USER node
WORKDIR /app
COPY --chown=node:node package*.json .


FROM base AS deps
RUN npm ci --legacy-peer-deps


FROM deps AS dev
COPY --chown=node:node . .
EXPOSE 3000
CMD ["npm", "run", "dev"]


FROM deps AS builder
COPY --chown=node:node . .
RUN npm run build
RUN npm prune --omit=dev


FROM deps AS check
COPY --chown=node:node . .
RUN npm test


FROM base AS prod
COPY --from=builder --chown=node:node /app/dist ./dist
COPY --from=builder --chown=node:node /app/node_modules ./node_modules
EXPOSE 3000
CMD ["npm", "start"]
