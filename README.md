# Bookify - Book Lending App - ReactJS-TS

Bookify is a web application for managing book lending services. It provides features for both administrators and users, allowing seamless management of book listings, lendings, and user activities.

---

## Features

- **User Registration**: Allow new users to register with name, email and password.
- **Admin**
- **Dashboard**: Overview of the system's metrics.
- **Manage Books**: Add, update, and remove books from the system.
- **Manage Users**: View and manage registered users.
- **Lending List**: Track and manage borrowed and returned books.
- **User**
- **Explore Books**: Browse the available books for lending.
- **My Books**: View books borrowed by the user.
- **User Dashboard**: Access personal stats and activity logs.

---

## Getting Started

### Prerequisites

Ensure you have the following installed:
- React.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/lfnsyhd/bookify
   ```

2. Navigate to the project directory:
   ```bash
   cd bookify
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Set up environment variables:
   Replace `.env-example` to `.env` and configure the variable

5. Set up environment API variables (important):
   Dont forget to modify these environment variable `VITE_API_AUTH_URL`, `VITE_API_BOOK_URL`, `VITE_API_LENDING_URL` that relevant to API Authentication Service URL and API Book Lending Service URL

### Running the App

1. Start the development server:
   ```bash
   npm run dev

2. Open your browser and navigate to:
   ```
   http://localhost:5007
   ```

3. For the purpose of API documentation, here is the link:
   ```
   http://localhost:5007/api-docs
   ```

4. Test the shipmentService:
   ```
   npm test
   ```

---