FROM node:20-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
EXPOSE 19006
CMD ["npx", "expo", "start", "--web", "--non-interactive"]
