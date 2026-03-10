FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY . .

EXPOSE 9000
ENV PORT=9000
ENV NODE_ENV=production

CMD ["sh", "-c", "npx medusa db:migrate && npx medusa start"]
