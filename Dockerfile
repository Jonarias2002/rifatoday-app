# set node version
FROM node:16.20.0

# set working directory
WORKDIR /app

# copy these files from the host into the image
COPY package*.json ./

# run the command to install dependencies
RUN npm install

# copy the rest of the app's source code from the host to the image filesystem
COPY . .

# make the app available on port 3000
EXPOSE 3000:3000

CMD ["npm","run","dev"]