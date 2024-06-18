# Use the official Node.js image as the base image
FROM node:14

# Create and change to the app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy app files
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Define environment variable for the app
ENV NODE_ENV=production

# Start the app
CMD ["node", "src/app.js"]
