# build the react app
FROM node:18.17.1 AS build
WORKDIR /app

# only copy package.json and package-lock.json at initialzation
COPY package.json package-lock.json ./
# recommend to use "npm ci --only=production" in the future. more suitable for production
RUN npm install 

# copy rest of file
COPY . .

# build the React application
RUN npm run build

# serve the app using NGINX
FROM nginx:1.25.2-alpine
COPY --from=build /app/build /usr/share/nginx/html

# use the custom NGINX configuration for SPA routing
COPY spa-nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]