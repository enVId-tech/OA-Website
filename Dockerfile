# Use an official node image as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

COPY public/ /app/public
COPY app/ /app/app
COPY package.json /app
COPY . /app

RUN npm ci

# RUN npm run build

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run app.js when the container launches
CMD ["npm", "start"]