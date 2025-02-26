const http=require('http')
const app=require('./app')
const port=process.env.PORT || 3000


const server=http.createServer(app)

server.listen(port,()=>{
    console.log(`Server is Running at ${port}`);
})




// {
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JlYmU0YmQyODg4NDNiNDY5NDFmNWUiLCJpYXQiOjE3NDA1NTM4MDMsImV4cCI6MTc0MDY0MDIwM30.IFn5UpwFFC8aplB71Z-SxwZiFYHLmkk4SQaUcsjuHnY",
//     "captain": {
//         "name": "John Doe",
//         "email": "johndoe@example.com",
//         "password": "$2b$10$Jnc3h8HLU4NDGDMu5U/p.Odj708jH5LWImaZRVQxXynbuPf8QfqbW",
//         "status": "inactive",
//         "vehicle": {
//             "color": "Red",
//             "plate": "MH12AB1234",
//             "capacity": 4,
//             "vehicleType": "car"
//         },
//         "_id": "67bebe4bd288843b46941f5e",
//         "__v": 0
//     }
// }