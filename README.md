# IRCTC_API

## Setup Instructions

### 1. Clone the Repository

To get started, clone the repository to your local machine:
```bash
git clone https://github.com/ankitdubetsec/IRCTC_API.git
cd IRCTC_API
```


### 2. Install Dependencies

Install the required dependencies using `npm`:

```bash
npm install
```

### 3. Create Environment File

Create a `.env` file in the root directory of the project and add your MySQL database credentials:

```
MYSQL_HOST='your-database-host'
MYSQL_USER='your-database-username'
MYSQL_PASSWORD='your-database-password'
MYSQL_DATABASE='your-database-name'
JWT_SECRET='your-jwt-secret'
ADMIN_API_KEY=931128b6f9c795dede3c51002c53bf947b50f95a6f7239e556e5c1091c05fce2
```

### 4. Start the Server

Run the application using the following command:

```bash
npm start
```

The server will start on port 5500 (or the port can be specified in the `.env` file).


## Tech Stack

- **Backend**: Node.js with Express.js
- **Database**: MySQL
- **Authentication**: JWT (JSON Web Tokens)
- **Environment Management**: dotenv

---

## Prerequisites

1. Node.js installed on your system.
2. MySQL server running locally or remotely.
3. A `.env` file configured with the following details.

---


## Database Setup

To get started, create the database and required tables by running the following SQL commands in your MySQL client:

```sql
-- Create the database
CREATE DATABASE irctc;

-- Use the database
USE irctc;

-- Create the users table
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('user', 'admin') DEFAULT 'user'
);

-- Create the train table
CREATE TABLE train (
    id INT PRIMARY KEY AUTO_INCREMENT,
    train_no INT NOT NULL,
    train_name VARCHAR(200) NOT NULL,
    source VARCHAR(200) NOT NULL,
    destination VARCHAR(200) NOT NULL,
    max_seats INT NOT NULL,
    available_seats INT NOT NULL
);

-- Create the bookings table
CREATE TABLE bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT NOT NULL,
    trainId INT NOT NULL,
    numberOfSeats INT NOT NULL,
    bookingTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES users(id),
    FOREIGN KEY (trainId) REFERENCES train(id)
);

-- Verify tables
SELECT * FROM users;
SELECT * FROM train;
SELECT * FROM bookings;
```

---
### API Endpoints

please refer this documentation

https://documenter.getpostman.com/view/30230934/2sAYBbf9a8

- The `bookSeat` API is protected by the Authorization Token, which must be provided during booking.
- Admin operations like adding a train require an API Key to ensure only authorized users can perform such actions.
- This project handles race conditions during seat booking using a transactional approach.

### Future Scope

In the future, I plan to enhance the IRCTC API by adding the ability to(due to time constraints i could not implement this but will update this repo in future):

Book Seats Across Multiple Stations:
Currently, users can book seats only on specific trains between a source and destination. In the future, I will expand this feature to allow users to select and book seats across multiple stations along a route. For example, if a user wants to book a seat between multiple stops (e.g., Mumbai -> Surat -> Baroda -> Ahmedabad), the system will check seat availability for each station along the route and allow booking accordingly.

Get Seat Availability Across Multiple Stations:
I will implement an API that allows users to check seat availability across all stations between a given source and destination. This will allow users to see real-time seat availability for trains that stop at multiple stations along the route. The system will return the available seats for each segment of the journey, helping users make informed decisions based on their preferred stations along the route.
