# Use official Node.js image from Docker Hub
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install
RUN npm run build

# Copy the rest of the app files
COPY . .

# Expose port 3000 to be accessed externally
EXPOSE 3000

# Start the app
CMD ["node", "index.js"]
