
# Task Management App

A task management web application built using **React** with **TypeScript** for the frontend, **Node.js** with **Express** for the backend, and **MongoDB** for database management. This app allows users to create, view, update, and delete tasks seamlessly via a set of REST API endpoints.

## Features

- **Create** tasks
- **View** tasks in a list format
- **Update** task details
- **Delete** tasks
- Responsive UI built with React
- Backend API built with Express and Node.js
- Data is stored in MongoDB for efficient management

## Tech Stack

- **Frontend**: React, TypeScript, CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **API**: RESTful APIs (CRUD operations)

## Getting Started

Follow these steps to get the app up and running locally:

### Prerequisites

- **Node.js** and **npm** installed. You can download them from [here](https://nodejs.org/).
- **MongoDB** installed or a MongoDB cloud service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Lavanyashankar09/taskManagementApp.git
    cd task-management-app
    ```

2. Install dependencies for both the frontend and backend:

    - For the **frontend** (React):

      ```bash
      cd frontend
      npm install
      ```

    - For the **backend** (Node.js):

      ```bash
      cd backend
      npm install
      ```

3. Configure MongoDB:

    - If you're using **MongoDB Atlas**, create a database and copy the connection string.
    - If using **local MongoDB**, ensure the MongoDB server is running.

    In the **backend** directory, open the `.env` file (create one if it doesn’t exist) and add your MongoDB connection URL:

    ```env
    MONGO_URI=your_mongo_connection_string
    ```

### Running the App

1. Start the **backend** server:

    ```bash
    cd backend
    npm start
    ```

    The backend will run on `http://localhost:5000`.

2. Start the **frontend** server:

    ```bash
    cd frontend
    npm start
    ```

    The frontend will be available at `http://localhost:3000`.

### API Endpoints

- **POST /api/tasks** - Create a new task
- **GET /api/tasks** - Get all tasks
- **PUT /api/tasks/:id** - Update a task
- **DELETE /api/tasks/:id** - Delete a task

### Example Requests

1. **Create Task** (POST /api/tasks):

    ```json
    {
      "title": "Buy groceries",
      "description": "Milk, eggs, bread",
      "completed": false
    }
    ```

2. **Get Tasks** (GET /api/tasks):

    ```json
    [
      {
        "_id": "60c72b2f5f1b2c3d8f8a16b1",
        "title": "Buy groceries",
        "description": "Milk, eggs, bread",
        "completed": false
      }
    ]
    ```

3. **Update Task** (PUT /api/tasks/:id):

    ```json
    {
      "title": "Buy groceries",
      "description": "Milk, eggs, bread, and butter",
      "completed": true
    }
    ```

4. **Delete Task** (DELETE /api/tasks/:id):

    No body required for deletion. Just pass the task's ID in the URL.
