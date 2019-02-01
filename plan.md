## Front-end

###Routing

- /
- /add-quote

### Components

- Homepage
- Add quote
- Header
- List?
- Quote?
- Login

###Redux

- Store
- Reducer
  - initial state
  - reducer function
  - action creators (functions taht create actions/objects)
  - action types (constant strings)
- Provider

## Back-end

### endpoints

- /api/quotes (GET, POST)
- /auth/callback
- /logout

###todo

- connect to database using massive
- set up .env file
- set up proxy file

###controllers

- quotesController
  -getQuotes
  -createQuote
- authController
  -login
  -logout

## Database

- quotes
  -id
  -phrase

- users
  -id
  -name
  -email
  -picture
  -auth0_id

## npm packages

- redux
- react-redux
- react-router-dom
- express
- axios
- body-parser
- massive
- dotenv
- express-session
- http-proxy-middleware
