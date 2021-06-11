# Menufy


## Server

### Start server

**Run 'npm install' inside server folder to install the server dependencies**

- Start the application with pino-colada pretty logging (not suitable for production)

> 'npm run dev'

- Start the application

> 'npm start'

- Execute the unit tests

> 'npm test'

### Enviroment Variables (Optional)

**Create a .env file inside the server folder**

Options:

- Server port (default 3000):

> PORT=3000

- Listen to requests from your LAN:

> FASTIFY_ADDRESS="Your IP Address"

or

> FASTIFY_ADDRESS="0.0.0.0" // Listen on all IPv4 address!