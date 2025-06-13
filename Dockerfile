# 1. Use official Node.js image
FROM node:18-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# 4. Copy project files
COPY . .

# 5. Build the project
ENV NEXT_DISABLE_ESLINT=1

RUN npm run build


# 6. Expose the port and start the app
EXPOSE 3000
CMD ["npm", "start"]
