
# Airbnb Clone

This is a full-stack Airbnb clone project built using the **MERN (MongoDB, Express, React, Node.js)** stack. It replicates the main features of Airbnb, such as searching for listings, user authentication, and booking management.

## Table of Contents
- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is a clone of the popular Airbnb platform. It aims to provide functionality similar to Airbnb, including user authentication, property listings, booking systems, and payment integration. The backend is powered by Node.js with Express and MongoDB, while the frontend is built using React.

## Technologies Used

- **Frontend:**
  - React.js
  - React Router
  - Axios
  - Material-UI

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - JWT for Authentication
  - bcrypt for password hashing
  - dotenv for managing environment variables

- **Other:**
  - Mongoose (ODM for MongoDB)
  - Redux (for state management)
  - Webpack
  - Babel

## Installation

### Prerequisites
- Node.js (v14.x or later)
- MongoDB (local or MongoDB Atlas)

### Step-by-Step Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/airbnb-clone.git
   cd airbnb-clone
   ```

2. Install dependencies for both the frontend and backend:

   **Backend:**
   ```bash
   cd server
   npm install
   ```

   **Frontend:**
   ```bash
   cd client
   npm install
   ```

3. Set up your MongoDB database (MongoDB Atlas or local MongoDB).
   
   - If using **MongoDB Atlas**, create a cluster, get your connection string, and add it to the `.env` file in the `server` directory under the `MONGO_URI` variable.
   - If using **local MongoDB**, make sure MongoDB is running on your local machine and update the connection string accordingly.

4. Create the `.env` file in the `server` directory and add the following environment variables:

   ```
   MONGO_URI=your-mongo-db-connection-string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

5. Run the backend server:

   ```bash
   npm start
   ```

6. Run the frontend client:

   ```bash
   cd client
   npm start
   ```

   This will start both the frontend and backend on your local machine. The frontend will typically be available at `http://localhost:3000`, and the backend at `http://localhost:5000`.

## Usage

Once the servers are running, you can:

- **Register and login** users using JWT-based authentication.
- **Browse listings**, search for properties by city, price, and type.
- **Book properties** and manage your bookings.
- **Admin functionality** to manage listings, users, and bookings.

## API Endpoints

### Authentication

- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Login an existing user and return a JWT token.
- `GET /api/auth/user`: Get user details (requires JWT authentication).

### Listings

- `GET /api/listings`: Get all listings.
- `GET /api/listings/:id`: Get a single listing by ID.
- `POST /api/listings`: Add a new listing (admin only).
- `PUT /api/listings/:id`: Update a listing (admin only).
- `DELETE /api/listings/:id`: Delete a listing (admin only).

### Bookings

- `GET /api/bookings`: Get all bookings for a user.
- `POST /api/bookings`: Create a new booking.
- `DELETE /api/bookings/:id`: Cancel a booking.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit pull requests. You can also open issues to suggest improvements or report bugs.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).
