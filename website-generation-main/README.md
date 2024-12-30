# 🚀 Website Generation System

Welcome to the Website Generation System! This project is a modern web application built with **React**, **Node.js/Express**, and **Strapi** CMS, managed within a monorepo structure using **npm workspaces**. This README will guide you through setting up the project, including the frontend, backend, and Strapi CMS.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Installation](#installation)
  - [1. Install All Dependencies](#1-install-all-dependencies)
  - [2. Set Up Environment Variables](#2-set-up-environment-variables)
- [Scripts](#scripts)
- [Running the Application](#running-the-application)
  - [Development Mode](#development-mode)
  - [Production Mode](#production-mode)
- [Strapi CMS Setup](#strapi-cms-setup)
  - [Getting Started with Strapi](#getting-started-with-strapi)
  - [Deployment](#deployment)
- [Dependencies Overview](#dependencies-overview)
- [Learn More](#learn-more)
- [Community](#community)
- [License](#license)

## Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v16 or higher recommended)
- **npm** (v8 or higher)

## Project Structure

The project is organized using **npm workspaces** for efficient dependency management and script handling. The main components are:

- **frontend**: Located in the `frontend` workspace, built with React.
- **backend**: Located in the `backend` workspace, built with Node.js and Express.
- **cms**: Located in the `cms` workspace, powered by Strapi.

```
root
│
├── frontend
├── backend
├── cms
└── package.json
```

## Installation

### 1. Install All Dependencies

In the root directory, run:

```bash
npm run install-all
```

This command installs all dependencies across `frontend`, `backend`, and `cms` using npm workspaces.

### 2. Set Up Environment Variables

#### Backend .env

Create a `.env` file in the `backend` directory:

```env
DATABASE_URL=postgresql://postgres:AN8X-z*55weMdun@db.rzlwvkemutnlozadkvie.supabase.co:5432/postgres
PORT=5002
JWT_SECRET=WAJD1P/DHpdwvuIxzgsISjthcieL9yrclvmo3UUCXyA=
CAPTCHA_SECRETKEY=6LfbfYkqAAAAAKiKn7WuNLN47IWCBuIeG59clYuk
```

#### Frontend .env

Create a `.env` file in the `frontend` directory. For React, variables must start with `REACT_APP_`:

```env
REACT_APP_STRAPI_URL=http://localhost:1337
CAPTCHA_SITEKEY=6LfbfYkqAAAAACzT786U-o4ypQDPeUP3OPXI2INP
REACT_APP_CONFIG=siteA
```

#### Strapi CMS .env

Create a `.env` file in the `cms` directory:

```env
HOST=0.0.0.0
PORT=1337

APP_KEYS=gIJ3BXnI5QJSWmzMCdXbqw==,1Egg9Xw1kPtoMT56ylDtsw==,NlvqAu0/nl4Vkg0yQNA8PA==,EAeN8/RIKtNKgu1b0H2Rqw==
API_TOKEN_SALT=2KB0uerhfzBNhlvfllefyg==
ADMIN_JWT_SECRET=QZVGEGMGVPC97bLgS2JdVA==
TRANSFER_TOKEN_SALT=gUOmAbVfTc2V7I3ycnaiBA==
JWT_SECRET=8Q7WE2UdmxUDWbo5m2y65g==


DATABASE_CLIENT=postgres
DATABASE_HOST=aws-0-eu-central-1.pooler.supabase.com
DATABASE_PORT=6543
DATABASE_NAME=postgres
DATABASE_USERNAME=postgres.rzlwvkemutnlozadkvie
DATABASE_PASSWORD=AN8X-z*55weMdun
DATABASE_SSL=true
DATABASE_SSL_REJECT_UNAUTHORIZED=false

```

## Scripts

All primary scripts are defined in the root `package.json` and managed via npm workspaces.

- **Install dependencies across all workspaces**:

  ```bash
  npm run install-all
  ```

- **Start the application**: Runs frontend, backend, and Strapi concurrently in development mode.

  ```bash
  npm start
  ```

- **Build the frontend**:

  ```bash
  npm run build
  ```

- **Start Strapi in development mode**:

  ```bash
  npm run develop-cms
  ```

- **Build Strapi admin panel**:
  ```bash
  npm run build-cms
  ```

## Running the Application

### Development Mode

To run the entire application in development mode, execute:

```bash
npm start
```

This command will:

- **Backend**: Start on `http://localhost:5000` with auto-reloading using `nodemon`.
- **Frontend**: Start on `http://localhost:3000` with `react-scripts`.
- **Strapi CMS**: Start on `http://localhost:1337` with auto-reloading.

Ensure all environment variables are correctly set before running.

### Production Mode

For production, follow these steps:

1. **Build the Frontend**:

   ```bash
   npm run build
   ```

2. **Build Strapi Admin Panel**:

   ```bash
   npm run build-cms
   ```

3. **Configure Your Production Server**:
   - Serve the frontend's `build` folder.
   - Deploy the backend and Strapi CMS using your preferred hosting solution.
   - Ensure environment variables are set appropriately for production.

## Strapi CMS Setup

Strapi is used as the Content Management System (CMS) for this project, providing a flexible and customizable backend.

### Getting Started with Strapi

Strapi comes with a powerful Command Line Interface (CLI) to scaffold and manage your project.

#### Development

Start your Strapi application with auto-reloading enabled:

```bash
npm run develop-cms
# or
yarn develop-cms
```

#### Production

Start your Strapi application with auto-reloading disabled:

```bash
npm run start-cms
# or
yarn start-cms
```

#### Build

Build your Strapi admin panel:

```bash
npm run build-cms
# or
yarn build-cms
```

### Deployment

Strapi offers various deployment options, including [Strapi Cloud](https://cloud.strapi.io). For detailed deployment instructions, refer to the [Strapi Deployment Documentation](https://docs.strapi.io/dev-docs/deployment).

To deploy using Yarn:

```bash
yarn strapi deploy
```

## Dependencies Overview

### Frontend

- **React**: UI library for building user interfaces.
- **React Router**: Client-side routing.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **Jest & Testing Library**: For testing React components.

### Backend

- **Express**: Web framework for Node.js.
- **Mongoose**: MongoDB object modeling.
- **Socket.IO**: Real-time communication.
- **dotenv**: Environment variable management.

### Strapi CMS

- **Strapi**: Headless CMS for managing content.
- **SQLite**: Default database for Strapi (can be replaced with MongoDB or others).

## Learn More

- **Frontend Documentation**:

  - [React Documentation](https://reactjs.org/docs/getting-started.html)
  - [React Router Documentation](https://reactrouter.com/)
  - [TailwindCSS Documentation](https://tailwindcss.com/docs)

- **Backend Documentation**:

  - [Express Documentation](https://expressjs.com/)
  - [Mongoose Documentation](https://mongoosejs.com/docs/guide.html)
  - [Socket.IO Documentation](https://socket.io/docs/v4/)

- **Strapi Documentation**:
  - [Strapi Docs](https://docs.strapi.io)
  - [Strapi CLI](https://docs.strapi.io/dev-docs/cli)
  - [Strapi Tutorials](https://strapi.io/tutorials)

## License

This project is licensed under the [MIT License](LICENSE).
