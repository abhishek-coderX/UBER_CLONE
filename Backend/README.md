# User Registration and Login Endpoints

## User Registration Endpoint

### Endpoint
`POST /users/register`

### Description
This endpoint is used to register a new user. It validates the input data, hashes the password, creates a new user in the database, and returns an authentication token along with the user details.

### Request Body
The request body should be a JSON object with the following fields:
- `name` (string, required): The name of the user. Must be at least 3 characters long.
- `email` (string, required): The email of the user. Must be a valid email address.
- `password` (string, required): The password of the user. Must be at least 6 characters long.

#### Example
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success (201)
If the user is successfully registered, the server will respond with a status code of 201 and a JSON object containing the authentication token and user details.

##### Example
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60c72b2f9b1d4c3a88e4f8b5",
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
}
```

#### Validation Error (400)
If the input data is invalid, the server will respond with a status code of 400 and a JSON object containing the validation errors.

##### Example
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Name should be at least 3 characters long",
      "param": "name",
      "location": "body"
    },
    {
      "msg": "Password should be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

#### Server Error (500)
If there is a server error, the server will respond with a status code of 500 and a JSON object containing the error message.

##### Example
```json
{
  "message": "Server error",
  "error": "Error details..."
}
```

---

## User Login Endpoint

### Endpoint
`POST /users/login`

### Description
This endpoint allows an existing user to log in by verifying their email and password. If successful, it returns an authentication token along with user details.

### Request Body
The request body should be a JSON object with the following fields:
- `email` (string, required): The email of the user. Must be a valid email address.
- `password` (string, required): The password of the user. Must be at least 6 characters long.

#### Example
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success (200)
If login is successful, the server will respond with a status code of 200 and a JSON object containing the authentication token and user details.

##### Example
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60c72b2f9b1d4c3a88e4f8b5",
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
}
```

#### Authentication Error (401)
If the provided credentials are invalid, the server will respond with a status code of 401 and an error message.

##### Example
```json
{
  "message": "Invalid credentials"
}
```

#### Server Error (500)
If there is a server error, the server will respond with a status code of 500 and a JSON object containing the error message.

##### Example
```json
{
  "message": "Server error",
  "error": "Error details..."
}
```

---

## User Profile Endpoint

### Endpoint
`GET /users/profile`

### Description
This endpoint retrieves the authenticated user's profile details.

### Headers
- `Authorization` (string, required): Bearer token for authentication.

### Responses

#### Success (200)
If the request is successful, the server will respond with a status code of 200 and the user profile details.

##### Example
```json
{
  "_id": "60c72b2f9b1d4c3a88e4f8b5",
  "name": "John Doe",
  "email": "john.doe@example.com"
}
```

#### Unauthorized (401)
If the user is not authenticated, the server will respond with a status code of 401.

##### Example
```json
{
  "message": "Unauthorized"
}
```

---

## User Logout Endpoint

### Endpoint
`GET /users/logout`

### Description
This endpoint logs out the user by clearing the authentication cookie and blacklisting the token.

### Headers
- `Authorization` (string, required): Bearer token for authentication.

### Responses

#### Success (200)
If logout is successful, the server will respond with a status code of 200 and a logout message.

##### Example
```json
{
  "message": "Logged Out"
}
```

#### Unauthorized (401)
If the token is already blacklisted, the server will respond with a status code of 401.

##### Example
```json
{
  "message": "Unauthorized"
}
```

#### Server Error (500)
If there is a server error, the server will respond with a status code of 500.

##### Example
```json
{
  "message": "Server error",
  "error": "Error details..."
}
```



# Captain Registration API Documentation

## Endpoint
`POST /register`

## Description
Registers a new captain with their personal and vehicle details.

## Request Headers
- `Content-Type: application/json`

## Request Body (JSON)
```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "SecurePass123",
  "vehicle": {
    "color": "Red",
    "plate": "MH12AB1234",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

## Request Validation
- `email` must be a valid email format.
- `name` must be at least 3 characters long.
- `password` must be at least 6 characters long.
- `vehicle.color` must be at least 3 characters long.
- `vehicle.plate` must be at least 3 characters long.
- `vehicle.capacity` must be an integer and at least 1.
- `vehicle.vehicleType` must be one of: `car`, `motorcycle`, `auto`.

## Response
### Success Response (201 Created)
```json
{
  "token": "<JWT_TOKEN>",
  "captain": {
    "_id": "60d21b4667d0d8992e610c85",
    "name": "John Doe",
    "email": "johndoe@example.com",
    "status": "inactive",
    "vehicle": {
      "color": "Red",
      "plate": "MH12AB1234",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

### Error Responses
#### 400 Bad Request - Validation Errors
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

#### 400 Bad Request - Captain Already Exists
```json
{
  "message": "Captain already exists"
}
```

## Notes
- The password is securely hashed before being stored in the database.
- The token generated is valid for 24 hours and should be used for authentication.
- The captain's default status is `inactive` upon registration.

## Authorization
- No authorization required for registration.


