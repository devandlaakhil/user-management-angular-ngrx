# User Management Application

A modern **User Management Application** built with **Angular, NgRx, Reactive Forms, and JSON Server**. The application provides authentication, user listing, and complete CRUD operations with a clean and responsive glassmorphism-based UI.

## User Name and Password to login
email === 'admin@gmail.com' 
password === 'admin123'

## 📌 Project Overview

The User Management Application is designed to demonstrate how to build a scalable Angular application using **NgRx for state management** and **JSON Server as a mock REST API**.

Users can log in and manage user records through a simple and responsive interface.

The application follows a structured architecture where:

* Angular handles the UI and application logic.
* NgRx manages the application state.
* JSON Server simulates the backend REST API.
* Reactive Forms handle form validation.
* Angular Router handles navigation.
* Glassmorphism styling provides a modern UI experience.

---

## ✨ Features

### 🔐 Authentication

* Login page
* Form validation
* Email and password validation
* Simple authentication simulation using LocalStorage
* Protected user-management flow

### 👥 User Management

* View all users
* Add new users
* Edit existing users
* Delete users
* Automatic sequential user ID generation
* User role management

### 📝 Form Validation

The user form includes:

* Required field validation
* Minimum name length validation
* Email format validation
* Role validation
* Validation messages

### 🎨 User Interface

* Modern glassmorphism design
* Responsive layout
* Clean user table
* Modern login screen
* Add/Edit user form
* Loading state
* Confirmation before deleting users

### 🗃️ State Management

NgRx is used to manage:

* User state
* Loading state
* Error state
* User creation
* User updates
* User deletion
* User loading

---

## 🛠️ Technologies Used

| Technology     | Purpose                    |
| -------------- | -------------------------- |
| Angular        | Frontend framework         |
| TypeScript     | Application development    |
| NgRx Store     | State management           |
| NgRx Effects   | API side effects           |
| Reactive Forms | Form handling & validation |
| Angular Router | Application navigation     |
| RxJS           | Reactive programming       |
| JSON Server    | Mock REST API              |
| HTML5          | Application structure      |
| CSS3           | Styling & glassmorphism UI |
| Git            | Version control            |
| GitHub         | Source code hosting        |

---

## 🏗️ Application Architecture

The application follows a simple Angular + NgRx architecture:

```text
User Interface
      │
      ▼
Angular Components
      │
      ▼
NgRx Actions
      │
      ▼
NgRx Effects
      │
      ▼
User Service
      │
      ▼
JSON Server REST API
      │
      ▼
db.json
```

API responses are then passed back through:

```text
JSON Server
     │
     ▼
User Service
     │
     ▼
NgRx Effects
     │
     ▼
NgRx Reducer
     │
     ▼
NgRx Store
     │
     ▼
Angular Components
```

---

## 📂 Project Structure

```text
user-management/
│
├── db.json
├── package.json
├── angular.json
├── README.md
│
└── src/
    └── app/
        │
        ├── auth/
        │   └── login/
        │       ├── login.ts
        │       ├── login.html
        │       └── login.css
        │
        ├── users/
        │   │
        │   ├── user-list/
        │   │   ├── user-list.ts
        │   │   ├── user-list.html
        │   │   └── user-list.css
        │   │
        │   ├── user-form/
        │   │   ├── user-form.ts
        │   │   ├── user-form.html
        │   │   └── user-form.css
        │   │
        │   ├── user.model.ts
        │   └── user.service.ts
        │
        ├── store/
        │   └── users/
        │       ├── users.actions.ts
        │       ├── users.reducer.ts
        │       ├── users.effects.ts
        │       └── users.selectors.ts
        │
        ├── app.routes.ts
        ├── app.config.ts
        └── app.ts
```

---

## 🔄 CRUD Operations

### Create User

The user fills out the Add User form.

```text
Add User
   ↓
NgRx addUser Action
   ↓
NgRx Effect
   ↓
POST /users
   ↓
JSON Server
   ↓
addUserSuccess
   ↓
NgRx Store
```

### Read Users

```text
Application
   ↓
loadUsers Action
   ↓
NgRx Effect
   ↓
GET /users
   ↓
JSON Server
   ↓
loadUsersSuccess
   ↓
NgRx Store
   ↓
User List
```

### Update User

```text
Edit User
   ↓
NgRx updateUser Action
   ↓
NgRx Effect
   ↓
PUT /users/:id
   ↓
JSON Server
   ↓
updateUserSuccess
   ↓
NgRx Store
```

### Delete User

```text
Delete User
   ↓
Confirmation
   ↓
NgRx deleteUser Action
   ↓
NgRx Effect
   ↓
DELETE /users/:id
   ↓
JSON Server
   ↓
deleteUserSuccess
   ↓
NgRx Store
```

---

## 🌐 REST API

The application uses JSON Server as a mock backend.

### Base URL

```text
http://localhost:3000
```

### Get Users

```http
GET /users
```

### Get Single User

```http
GET /users/:id
```

### Create User

```http
POST /users
```

Example:

```json
{
  "id": "4",
  "name": "Raj",
  "email": "raj@gmail.com",
  "role": "Admin"
}
```

### Update User

```http
PUT /users/:id
```

### Delete User

```http
DELETE /users/:id
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/user-management.git
```

### 2. Navigate to the Project

```bash
cd user-management
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start JSON Server

Open a terminal and run:

```bash
npm run server
```

The mock backend will start at:

```text
http://localhost:3000
```

### 5. Start Angular Application

Open another terminal:

```bash
npm start
```

The application will be available at:

```text
http://localhost:4200
```

---

## 🔑 Demo Login

Use the following credentials:

```text
Email: admin@gmail.com
Password: admin123
```

> These credentials are used only for demonstrating the frontend authentication flow. This project does not implement production-level authentication.

---

## 📊 Sample User Data

The application uses the following sample data:

```json
{
  "users": [
    {
      "id": "1",
      "name": "Akhil",
      "email": "akhil@gmail.com",
      "role": "Admin"
    },
    {
      "id": "2",
      "name": "Rahul",
      "email": "rahul@gmail.com",
      "role": "User"
    },
    {
      "id": "3",
      "name": "Priya",
      "email": "priya@gmail.com",
      "role": "User"
    }
  ]
}
```

---

## 🧠 NgRx State Management

The application uses NgRx to maintain a predictable application state.

### Actions

Actions represent events occurring in the application.

Examples:

```text
loadUsers
addUser
updateUser
deleteUser
```

### Reducer

The reducer updates the state based on dispatched actions.

```text
Action
   ↓
Reducer
   ↓
New State
```

### Effects

Effects handle asynchronous API operations.

```text
Action
   ↓
Effect
   ↓
API Request
   ↓
Success / Failure Action
```

### Selectors

Selectors retrieve specific data from the NgRx store.

```text
selectUsers
selectLoading
selectError
```

---

## 📱 Application Screens

### Login

Modern glassmorphism login interface with form validation.

### User List

Displays all users with:

* ID
* Name
* Email
* Role
* Edit action
* Delete action

### Add User

Allows users to create a new user record with validation.

### Edit User

Allows users to update an existing user.

---

## 🎯 Learning Objectives

This project demonstrates practical knowledge of:

* Angular standalone components
* Angular routing
* Reactive Forms
* Form validation
* Dependency injection
* RxJS
* NgRx Store
* NgRx Actions
* NgRx Reducers
* NgRx Effects
* NgRx Selectors
* REST API integration
* CRUD operations
* JSON Server
* Component-based architecture
* State management
* Responsive CSS
* Git and GitHub workflow

---

## 🔮 Future Improvements

The project can be extended with:

* JWT authentication
* Route guards
* Backend authentication
* Pagination
* Search and filtering
* Sorting
* User profile management
* Role-based access control
* Toast notifications
* API error handling
* Unit testing
* Angular Material integration
* Production backend using Node.js and MongoDB

---

## 👨‍💻 Author

**Akhil Raj**

Frontend Developer | Angular | React | JavaScript

Interested in building scalable and user-friendly web applications.

---

## ⭐ If You Like This Project

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is created for learning and demonstration purposes.
