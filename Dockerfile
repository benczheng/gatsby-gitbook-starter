FROM --platform=linux/amd64 node:14.16.0

# Create app directory
WORKDIR /app

# Node 17 support https://github.com/hasura/gatsby-gitbook-starter/pull/159
# ENV NODE_OPTIONS=--openssl-legacy-provider

# Install app dependencies
# RUN npm -g install serve
RUN npm -g install gatsby-cli@4.24.0

COPY package*.json ./

RUN npm ci

# Bundle app source
COPY . .

# Build static files
RUN npm run build

# serve on port 8080
# CMD ["serve", "-l", "tcp://0.0.0.0:8080", "public"]
CMD ["gatsby", "serve", "--verbose", "--prefix-paths", "-p", "8080", "--host", "0.0.0.0"]
