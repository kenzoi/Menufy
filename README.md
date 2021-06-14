# Menufy


## Server

### Enviroment Variables

**Create a .env file inside the server folder**


- Please set port to 3001 (expected port by the client):

> PORT=3001

(default port is 3000)

Extra options (not required):

- Listen to requests from your LAN:

> FASTIFY_ADDRESS="Your IP Address"

or

> FASTIFY_ADDRESS="0.0.0.0" // Listen on all IPv4 address!

### Start server

**Run 'npm install' inside server folder to install the server dependencies**

- Start the application with pino-colada pretty logging (not suitable for production)

> 'npm run dev'

- Start the application

> 'npm start'

- Execute the unit tests

> 'npm test'