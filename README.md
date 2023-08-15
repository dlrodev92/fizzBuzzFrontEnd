# FizzBuzz Web Application

This is a simple web application that solves the "FizzBuzz" problem. It includes a backend API developed using Php and Fligth as framework and a frontend developed using Vite ReactJS.

## Backend Link
[Backend GitHub Repository](https://github.com/dlrodev92/fizzBuzzBackend)

## Features

- Backend API that provides FizzBuzz numbers according to the specified rules.
- Backend Structure is done folowing the MVC framework so routes, logic and configuration are in different parts making     the application simpler and easier to scale.
- Backend API that provides authorization for users that only exist on the db to access FizzBuzz.
- Frontend in ReactJS that provides authorization for users.
- Frontend in ReactJS that fetches and displays FizzBuzz numbers if authorized.
- Styling applied to the frontend using TailwindCSS.
- Security measures considered and implemented:
    - Authorization on backend to prevent users from accessing FizzBuzz.
    - Creation of user using a hashing algorithm to store passwords.
    - Avoiding Sql injection by using a mock ORM function for my mock db.
    


## Getting Started

### Prerequisites

- [PHP] (for the backend)
- [XAMPP] (for the backend server)
- [Node.js](https://nodejs.org/) (for the frontend)

### Installation

Clone the repositories in your computer:

  - Backend: https://github.com/dlrodev92/fizzBuzzBackend

   For the backend I recommend XAMPP to create an apache server then clone the repository into your folder htdocs.

   Once you have the repository and the apache server go to http://localhost/fizzBuzzBackend/fizzbuzz .
   If you see a json on the screen then you are ready to go.

  - Frontend: https://github.com/dlrodev92/fizzBuzzFrontEnd

   Clone the repository and cd on /fizzBuzzFrontend then run the script "npm run dev" go to http://localhost:5173/ and you should see the app running.

   VERY IMPORTANT! Make sure vite runs the app on http://localhost:5173 otherwise the CORS server will fail.

   -Users:
   To test the app you can either create your own user sending a post request to this endPoint:
   http://localhost/fizzBuzzBackend/createUser
   
   {
    "username" : "username",
    "password" : "password"
   }

   Or you can use the default users:
   
   username: "user1",
   password: "12345"

   username: "user2"
   password: "678910"

   username: "david",
   password: "lopez"

   username: "tom",
   password: "ford"

   

### Finally

-Thanks for the opportunity it's been a challenge crete the api on php as it is my first time using it for this matter.

-if you have any problems running the app contact me on
dlrdev92@gmail.com