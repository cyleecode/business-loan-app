# Use an official Node.js base image with a specific version
FROM node:14

RUN mkdir -p /home/node/frontend

# Set the working directory in the container
WORKDIR /home/node/frontend

# Copy the package.json and package-lock.json files into the container
COPY package*.json ./

# Install the application dependencies
RUN npm ci

# Copy the rest of the application code into the container
COPY . /home/node/frontend

# Expose a specific port that the application will listen on
EXPOSE 4200

# Define the command to start the application
RUN npm run start
