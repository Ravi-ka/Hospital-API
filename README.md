# Hospital-API

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine
- MongoDB installed and running

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/Ravi-ka/Hospital-API.git
   ```

2. Navigate into the project directory:

   ```bash
   cd Hospital-API
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Rename `.env.example` to `.env` and update the environment variables with your own values.

5. Start the server:

   ```bash
   npm start
   ```

6. Open your web browser and visit `http://localhost:3000` to view the application.

## Environment Variables

Make sure to set the following environment variables in your `.env` file:

- `PORT`: Port number for the server
- `DB_URL`: URI for connecting to MongoDB
- `JWT_SECRET`: Secret key for session management
- `JWT_EXPIRE` : update the expire time for the JWT token

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.
