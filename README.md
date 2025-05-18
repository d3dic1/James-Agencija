# Marketing Agency Web Application

A full-stack web application for a marketing agency, featuring both a customer-facing website and an admin dashboard.

## Tech Stack

- **Frontend**: Next.js + Tailwind CSS + TypeScript
- **Backend**: Express.js + Node.js + TypeScript
- **Database**: MongoDB (Mongoose)
- **Authentication**: JWT + bcrypt
- **Real-Time**: Socket.io
- **API**: RESTful endpoints

## Project Structure

```
marketing-agency-app/
├── frontend/           # Next.js frontend application
├── backend/           # Express.js backend application
└── package.json       # Root package.json for workspace management
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env` in both frontend and backend directories
   - Update the variables with your configuration

4. Start the development servers:
   ```bash
   npm run dev
   ```

This will start both the frontend (Next.js) and backend (Express) servers concurrently.

## Features

### Marketing Website
- Pixel-perfect implementation of the Figma design
- Responsive design for all devices
- Functional forms with validation
- Complete navigation system

### Admin Dashboard
- Real-time metrics and updates
- User management system
- Role-based access control
- Activity logging and notifications

## Development

- Frontend runs on: http://localhost:3000
- Backend runs on: http://localhost:5000

## Deployment

The application is configured for deployment on:
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

## License

MIT 