# Task-01: Basic REST API with CRUD Operations

A simple RESTful API built using **Node.js, Express.js, and TypeScript** to perform CRUD (Create, Read, Update, Delete) operations on users.

## 🚀 Technologies Used

* Node.js
* Express.js
* TypeScript
* In-memory storage using JavaScript `Map`
* UUID
* PowerShell / REST API testing

## 📁 Project Structure

```text
task-WD01-rest-api/
│
├── src/
│   ├── controllers/
│   │   └── userController.ts
│   │
│   ├── data/
│   │   └── users.ts
│   │
│   ├── routes/
│   │   └── userRoutes.ts
│   │
│   ├── types/
│   │   └── user.ts
│   │
│   ├── utils/
│   │   └── validation.ts
│   │
│   └── server.ts
│
├── dist/
├── package.json
├── package-lock.json
└── tsconfig.json
```

## 📋 User Model

Each user contains the following fields:

| Field   | Type          | Description            |
| ------- | ------------- | ---------------------- |
| `id`    | UUID / string | Unique user identifier |
| `name`  | string        | User's name            |
| `email` | string        | User's email address   |
| `age`   | number        | User's age             |

## 🔗 API Endpoints

### 1. Create User

**POST** `/users`

Request body:

```json
{
  "name": "Sangram",
  "email": "sangram@gmail.com",
  "age": 22
}
```

Response:

**201 Created**

```json
{
  "id": "generated-uuid",
  "name": "Sangram",
  "email": "sangram@gmail.com",
  "age": 22
}
```

---

### 2. Get All Users

**GET** `/users`

Returns all users currently stored in memory.

Response:

**200 OK**

```json
[
  {
    "id": "generated-uuid",
    "name": "Sangram",
    "email": "sangram@gmail.com",
    "age": 22
  }
]
```

---

### 3. Get User by ID

**GET** `/users/:id`

Example:

```text
GET /users/d92bc545-237d-4ef9-a551-43c8573e7080
```

Response:

**200 OK**

```json
{
  "id": "d92bc545-237d-4ef9-a551-43c8573e7080",
  "name": "Sangram",
  "email": "sangram@gmail.com",
  "age": 22
}
```

If the user does not exist:

**404 Not Found**

```json
{
  "error": "User not found"
}
```

---

### 4. Update User

**PUT** `/users/:id`

Request body:

```json
{
  "name": "Sangram Keshari",
  "email": "sangram.keshari@gmail.com",
  "age": 23
}
```

Response:

**200 OK**

```json
{
  "id": "generated-uuid",
  "name": "Sangram Keshari",
  "email": "sangram.keshari@gmail.com",
  "age": 23
}
```

---

### 5. Delete User

**DELETE** `/users/:id`

Response:

**204 No Content**

If the user does not exist:

**404 Not Found**

```json
{
  "error": "User not found"
}
```

## ✅ Input Validation

The API validates:

### Name

* Must be provided
* Must be a string
* Cannot be empty

### Email

* Must be provided
* Must be a valid email format

Example invalid email:

```text
invalid-email
```

Response:

**400 Bad Request**

```json
{
  "error": "A valid email is required"
}
```

### Age

* Must be a number
* Must be an integer
* Must be between `0` and `120`

Example:

```json
{
  "name": "Test User",
  "email": "test@gmail.com",
  "age": 25
}
```

## ⚠️ Error Handling

The API uses appropriate HTTP status codes:

| Status Code | Meaning                   |
| ----------- | ------------------------- |
| `200`       | Successful request        |
| `201`       | User successfully created |
| `204`       | User successfully deleted |
| `400`       | Invalid request or input  |
| `404`       | User not found            |

## 🛠️ Installation

Clone or download the project and open the project folder in VS Code.

Install dependencies:

```bash
npm install
```

## ▶️ Run in Development Mode

```bash
npm run dev
```

The server will start at:

```text
http://localhost:3000
```

## 🏗️ Build the Project

Compile the TypeScript code:

```bash
npm run build
```

The compiled JavaScript files will be generated inside the `dist` folder.

## ▶️ Run Production Build

```bash
npm start
```

The server will run at:

```text
http://localhost:3000
```

## 🧪 Testing

The API was tested using PowerShell REST requests.

Example:

```powershell
Invoke-RestMethod -Uri "http://localhost:3000/users" -Method GET
```

Create a user:

```powershell
$body = @{
    name = "Sangram"
    email = "sangram@gmail.com"
    age = 22
} | ConvertTo-Json

Invoke-RestMethod `
    -Uri "http://localhost:3000/users" `
    -Method POST `
    -ContentType "application/json" `
    -Body $body
```

## 💾 Data Storage

This project uses an in-memory JavaScript `Map` for storing users.

```typescript
export const users = new Map<string, User>();
```

Because the data is stored only in memory, all users will be removed when the server is restarted.

## 📌 Task Requirements Completed

* [x] REST API
* [x] CRUD operations
* [x] User model
* [x] UUID-based IDs
* [x] In-memory storage
* [x] Input validation
* [x] Error handling
* [x] Appropriate HTTP status codes
* [x] TypeScript implementation
* [x] Production build tested

## 👨‍💻 Author

**Sangram Keshari Ojha**

B.Tech – Computer Science & Engineering
KIIT University
