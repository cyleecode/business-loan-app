# Use an official Node.js base image with a specific version
FROM node:14-alpine AS build

RUN mkdir -p /home/node/frontend

# Set the working directory in the container
WORKDIR /home/node/frontend

# Copy the package.json and package-lock.json files into the container
COPY package*.json ./

# Install the application dependencies
RUN npm ci

# Copy the rest of the application code into the container
COPY . /home/node/frontend

# Build dist
RUN npm run build

# Use nginx
FROM nginx:1.23.4-alpine as runtime
# Copy angular nginx config
COPY --from=build /home/node/frontend/nginx/angular.conf /etc/nginx/conf.d/angular.conf
# Copy build dist to nginx html
COPY --from=build /home/node/frontend/dist/business-loan-app /usr/share/nginx/html
