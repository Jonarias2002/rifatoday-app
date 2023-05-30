# set node version
FROM node:16.20.0

# set working directory
WORKDIR /app

# copy these files from the host into the image
COPY package*.json ./

# run the command to install dependencies
RUN npm ci

# copy the rest of the app's source code from the host to the image filesystem
COPY . .

# make the app available on port 3000
EXPOSE 80

# start the app within the container:
RUN npm run build

# start the app within the container:
CMD ["nginx", "-g", "daemon off;"]