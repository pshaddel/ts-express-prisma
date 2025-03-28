# Use an official Node runtime as the base image - alpine is a lightweight version of node
# node 23 alpine
FROM node:23-alpine

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm i --ignore-scripts
RUN npm install -g tsc-watch
# show the folder structure
COPY . .
RUN npx prisma generate --schema=./prisma/schema.prisma

# Copy the rest of the application code to the working directory

# Compile TypeScript to JavaScript
# RUN npm run build

# RUN npm prune --production

# Make port 8080 available to the world outside this container
EXPOSE 3001

# Run the app when the container launches
# tsc-watch --onSuccess 'node --env-file=.env ./dist/src/app.js'
CMD ["tsc-watch", "--onSuccess", "node --env-file=.env ./dist/src/app.js"]