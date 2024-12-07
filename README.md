# IRCTC_API

## Setup Instructions

### 1. Clone the Repository

To get started, clone the repository to your local machine:

git clone https://github.com/ankitdubetsec/IRCTC_API.git
cd IRCTC_API


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
