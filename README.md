# Project Menufy

Project Menufy is a SPA aimed at helping restaurants have their digital menus without costs due to the COVID pandemic.
The app is entirely designed for smartphones.

## Getting started

This repo contains both client and server.
You need git, node, npm and docker/docker-compose to run the app.
Optionally you can skip docker and install Mongo directly on your PC.

## Installation

1. Clone this repo and enter

    ```bash
    git clone https://github.com/kenzoi/Menufy.git
    cd Menufy
    ```

2. Install dependencies

    ```bash
    npm i
    cd client
    npm i
    cd ../server
    npm i
    ```

3. While in the server folder run ```docker-compose up``` to start MongoDB.

4. Run ```npm start``` to start the server.

5. While in the client folder run ```npm start``` to start the client.

6. (Optional) Server enviroment variables

    ```bash
    PORT=3001 # (default port is 3000)
    FASTIFY_ADDRESS="0.0.0.0" # Listen on all IPv4 address, enable access from your local network.
    ```

## Tech Stack

* [React](https://reactjs.org/)
* [Fastify](https://www.fastify.io/)
* [Mongo](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)