# hacktivpress-kokoh

# My App name
Hacktivpress App

# My App Description
Blogging system Application

## Hacktivpress App
List of registrations Routes:

| Route                   | HTTP  | Description             |
| ----------------------  |:-----:|:-----------------------:|
| /user/signup            | post  | signup                  |
| /user/signin            | post  | signin                  |

List of articles Routes:        

| Route                   | HTTP   | Description             |
| ----------------------  |:------:|:-----------------------:|
| /articles/              | GET    | find all articles       |
| /articles/              | POST   | create articles         |
| /articles/:id           | GET    | find by id article      |
| /articles/:id           | PUT    | update article by id    |
| /articles/:id           | DELETE | delete article by id    |

List of filter Routes:

| Route                   | HTTP   | Description                                     |
| ----------------------  |:------:|:-----------------------------------------------:|
| /author/:author         | GET    | find articles created by this author name       |
| /category/:category     | GET    | find articles with this category                |

## How To Use The Program:
npm install in client & server
npm start on server
npm run dev on client
