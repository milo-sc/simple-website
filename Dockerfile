# Use Node.js 20 to build the React app
FROM node:20-alpine as build

# Set working directory inside container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all files and build the React app
COPY . .
RUN npm run build

# Use Nginx to serve the static build
FROM nginx:alpine

# Remove default Nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom Nginx config from the project root
COPY nginx.conf /etc/nginx/conf.d/default.conf

# **COPY the built React app from the build stage**
COPY --from=build /app/build /usr/share/nginx/html

# Expose Cloud Run's expected port
EXPOSE 8080

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]