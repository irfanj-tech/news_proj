# Use Node.js as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy only the backend package.json and package-lock.json
COPY backend/package*.json ./

# Install backend dependencies
RUN npm install

# Copy the backend source code
COPY backend/ ./

# Expose the backend port
EXPOSE 5002

# Start the backend server
CMD ["npm", "run", "start"]
