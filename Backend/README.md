# User Registration Endpoint

## Endpoint
`POST /users/register`

## Description
This endpoint is used to register a new user. It validates the input data, hashes the password, creates a new user in the database, and returns an authentication token along with the user details.

## Request Body
The request body should be a JSON object with the following fields:
- `name` (string, required): The name of the user. Must be at least 3 characters long.
- `email` (string, required): The email of the user. Must be a valid email address.
- `password` (string, required): The password of the user. Must be at least 6 characters long.

### Example
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## Responses

### Success (201)
If the user is successfully registered, the server will respond with a status code of 201 and a JSON object containing the authentication token user details.

#### Example
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

### Validation Error (400)
If the input data is invalid, the server will respond with a status code of 400 and a JSON object containing the validation errors.

#### Example
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

### Server Error (500)
If there is a server error, the server will respond with a status code of 500 and a JSON object containing the error message.

#### Example
```json
{
  "message": "Server error",
  "error": "Error details..."
}
```



