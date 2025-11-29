# LibraryManagementApi

#Project setup
A backend API built with Node.js, Express, and MongoDB that enables CRUD operations for Authors and Books, along with search and pagination.

Features
Create Authors & Books
Get all books with author details
Search books by author name
Pagination support
Input validation using Joi
MongoDB with Mongoose ODM
Environment variable configuration
Clean, production-level folder structure


Project Structure
src
 ├── config
 ├── controllers
 ├── middleware
 ├── models
 ├── routes
 ├── schemas
 ├── app.js


 Project Setup & Run Instructions
  Git repo : https://github.com/Vinodvinnu-m/LibraryManagementApi#
 Clone the repository 
    git clone https://github.com/Vinodvinnu-m/LibraryManagementApi.git
    cd LibraryManagementApi
Install dependencies 
  npm install
Add environment variables in .env file
   PORT=8080
 MONGO_URI=mongodb://localhostIp:27017/library_management

 Run server using below command
  npm run dev

Build project to /dist
 npm run build

Running api url
http://localhost:8080/api



  All Api end points

Method	       Endpoint	                                 Description

POST	      /api/author/create	                     Create Author
Get	          /api/author/list	                         Fetch Author List
POST	      /api/books/create	                         Create Book
GET	          /api/books?page=1&limit=10	             List Books (Paginated)
GET	          /api/books/search?authorName=John	         Search Books by Author
PUT	          /api/books/update/:id	                     Update Book
DELETE	      /api/books/delete/:id	                     Delete Book



Examples of Apis request and Response
 Curl Request and response for apis
Create Author:

  Request Body:
         {
    "name": "Dan Brown",
    "bio": "Author of Da Vinci Code.",
     "age": 59
      }

  Response
      {
    "message": "Author created successfully"
}    


Curl
      
      curl --location 'http://localhost:8080/api/author/create' \
--header 'Content-Type: application/json' \
--data '{
  "name": "Dan Brown",
  "bio": "Author of Da Vinci Code.",
  "age": 59
}'



Fetch Authors list 
Request 
You can send the author fields in query params this is optional 

Response
 {
    "message": "Author data Fetched successfully",
    "data": [
        {
            "_id": "692aa3f1567cc0568201af79",
            "name": "Paulo Coelho",
            "bio": "Brazilian lyricist and novelist.",
            "age": 76,
            "createdAt": "2025-11-29T07:42:41.141Z",
            "updatedAt": "2025-11-29T07:42:41.141Z",
            "__v": 0
        }
    ]
}


 Curl:
 curl --location 'http://localhost:8080/api/author/list?id=692aa3f1567cc0568201af79' \
--data ''


Create Books Api

Request body
    
     {
  "title": "Harry Potter and the Prisoner of Azkaban",
  "genre": "Fantasy",
  "author": "692aa0d0cb1619eba7cf6987"
}


Response body
  
  {
    "message": "Book created successfully",
    "data": {
        "title": "Harry Potter and the Prisoner of Azkaban",
        "genre": "Fantasy",
        "author": "692aa0d0cb1619eba7cf6987",
        "_id": "692ae889f8b7d6bf3505e905",
        "createdAt": "2025-11-29T12:35:21.908Z",
        "updatedAt": "2025-11-29T12:35:21.908Z",
        "__v": 0
    }
}




Curl

   curl --location 'http://localhost:8080/api/books/create' \
--header 'Content-Type: application/json' \
--data '{
  "title": "Harry Potter and the Prisoner of Azkaban",
  "genre": "Fantasy",
  "author": "692aa0d0cb1619eba7cf6987"
}'




Fetch Book List By Author Name

Request: 
   
   Give the authorName in query params 


Response:

  {
    "message": "Book Data Fetched successfully",
    "data": [
        {
            "_id": "692aa89707721f36bb3cb40e",
            "title": "A Clash of Kings",
            "genre": "Fantasy",
            "author": {
                "_id": "692aa3f1567cc0568201af79",
                "name": "Paulo Coelho",
                "bio": "Brazilian lyricist and novelist.",
                "age": 76,
                "createdAt": "2025-11-29T07:42:41.141Z",
                "updatedAt": "2025-11-29T07:42:41.141Z",
                "__v": 0
            },
            "createdAt": "2025-11-29T08:02:31.475Z",
            "updatedAt": "2025-11-29T08:02:31.475Z",
            "__v": 0
        }
    ]
}


Curl request
  
  curl --location 'http://localhost:8080/api/books?authorName=Paulo%20Coelho'



  Update the book data By id
    
    Request Body 
       send id in url and body
        {
  "title": "Harry Potter and the Prisoner of Azkaban",
  "genre": "Fantasy and love",
  "author": "692aa45915c7beaed84f0b4c"
}

     Response 


     {
    "message": "Book data updated successfully",
    "data": {
        "_id": "692aa86a07721f36bb3cb40c",
        "title": "Harry Potter and the Prisoner of Azkaban",
        "genre": "Fantasy and love",
        "author": "692aa45915c7beaed84f0b4c",
        "createdAt": "2025-11-29T08:01:46.934Z",
        "updatedAt": "2025-11-29T10:58:20.822Z",
        "__v": 0
    }
}




Curl request

curl --location --request PUT 'http://localhost:8080/api/books/update/692aa86a07721f36bb3cb40c' \
--header 'Content-Type: application/json' \
--data '{
  "title": "Harry Potter and the Prisoner of Azkaban",
  "genre": "Fantasy and love",
  "author": "692aa45915c7beaed84f0b4c"
}'



Delete Book By Id Apis

Request Body : send id in Url 
Response :

 {
    "message": "Book data deleted successfully",
    "data": {
        "_id": "692aa86a07721f36bb3cb40c",
        "title": "Harry Potter and the Prisoner of Azkaban",
        "genre": "Fantasy and love",
        "author": "692aa45915c7beaed84f0b4c",
        "createdAt": "2025-11-29T08:01:46.934Z",
        "updatedAt": "2025-11-29T10:58:20.822Z",
        "__v": 0
    }
}

Curl Request


   curl --location --request DELETE 'http://localhost:8080/api/books/delete/692aa86a07721f36bb3cb40c' \
--data ''