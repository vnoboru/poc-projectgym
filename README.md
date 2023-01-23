# poc-projectgym

## How to run for development
1. Clone this repository
2. Install all dependencies
```
npm i
```
3. Dump the database
```
./dump/dump.sql
```
4. Configure the `.env` file using the `.env.example` file
5. Start server
```
npm run dev
``` 

## Routes
```
POST: /exercices
  Send a new exercice.
  
Body example: 
{ 
  "title": ..., 
  "partBody": ...
}

GET: /exercices
  Return all registered exercices.

GET: /exercices/:id
  Returns the exercise with the registered id.
  
PUT: /exercices

Body example:
{ 
  "id": ...,
  "title": ..., 
  "partBody": ...
}

DELETE: /exercices
  Delete an exercise with id.
  
Body example:
{ 
  "id": ...
}
```
