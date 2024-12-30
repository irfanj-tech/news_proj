# Use Node.js as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy only the CMS package.json and package-lock.json
COPY cms/package*.json ./

# Install CMS dependencies
RUN npm install

# Copy the CMS source code
COPY cms/ ./

# Expose the CMS port
EXPOSE 1337

# Start the CMS server
CMD ["npm", "run", "develop"]
