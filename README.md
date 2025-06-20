# Construction Contract Management Application

This is a full-stack web application for managing construction contracts with user authentication and role-based access control.

## Features

- User login with roles: admin and staff
- Admin can add, edit, delete contracts
- Staff can view contracts
- Contract fields: contract code, project name, investor, contractor, signing date, contract value, duration, status
- Search and filter contracts by project name, contractor, and status
- Responsive UI for desktop and mobile
- Built with React (Next.js), Node.js/Express, MongoDB, Tailwind CSS

## Installation

### Backend

1. Make sure you have Node.js and MongoDB installed and running.

2. Navigate to the project root directory.

3. Install backend dependencies:

```bash
npm install express mongoose cors bcryptjs jsonwebtoken
```

4. Start MongoDB server (if not already running):

```bash
mongod
```

5. Start the backend server:

```bash
node server.js
```

The backend server will run on port 5000.

### Frontend

1. Navigate to the frontend directory (if separate) or project root if combined.

2. Install frontend dependencies:

```bash
npm install
```

3. Start the Next.js development server:

```bash
npm run dev
```

The frontend will be available at http://localhost:3000

## Usage

- Register initial users via backend `/api/auth/register` endpoint or directly in the database.
- Login at the frontend login page.
- Admin users can manage contracts.
- Staff users can view contracts.

## Notes

- Update the JWT secret key in `routes/auth.js` and `routes/contracts.js` for production use.
- Adjust MongoDB connection string in `server.js` as needed.
- This is a basic implementation and can be extended with more features and security improvements.
