# IRCTC_API

## Setup Instructions

### 1. Clone the Repository

To get started, clone the repository to your local machine:

```bash
git clone https://github.com/ankitdubetsec/IRCTC_API.git
```

### 2. Install Dependencies

Install the required dependencies using `npm`:

```bash
npm install
```

### 3. Create Environment File

Create a `.env` file in the root directory of the project and add your MySQL database credentials:

```
MYSQL_HOST=your_database_host
MYSQL_USER=your_database_user
MYSQL_PASSWORD=your_database_password
MYSQL_DATABASE=your_database_name
PORT=3000
JWT_SECRET=your_secret_key
ADMIN_API_KEY=931128b6f9c795dede3c51002c53bf947b50f95a6f7239e556e5c1091c05fce2
```

### 4. Start the Server

Run the application using the following command:

```bash
npm start
```

The server will start on port 3000 (or the port specified in the `.env` file).

### 5. API Endpoints

please refer this documentation

https://documenter.getpostman.com/view/30230934/2sAYBbf9a8

- The `bookSeat` API is protected by the Authorization Token, which must be provided during booking.
- Admin operations like adding a train require an API Key to ensure only authorized users can perform such actions.
- This project handles race conditions during seat booking using a transactional approach.


