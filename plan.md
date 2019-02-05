<!-- CSS Styling/Colors: -->
<!-- Green: #51af33 -->
<!-- lightgrey: #e8ebef -->

#TaskRabbit Semi-Clone

## Front-end

###Routing

- {LandingPage} - "/"
- {HowItWorks} - "/how-it-works"
- {Messages} - "/messages/:user_id"
- {MessagesIndividual} - "/messages/:task_id"

  <!-- Client Side Routing -->

- {DescribeTask} - "/describe-task"
- {PickTasker} - "/pick-tasker"
- {ConfirmBooking} - "/confirm-booking"
- {TaskConfirmation} - "/task-confirmation"
- {ClientDashboard} - "/client-dashboard"
- {ComposeReview} - "/compose-review/:task_id"

<!-- Tasker Side Routing -->

- {CreateTaskerProfile} - "/create-tasker-profile"
- {Expertise} - "/expertise"
- {TaskerDashboard} - "/tasker-dashboard"
- {TaskerProfileAndReviews} - "/tasker-profile/:tasker_id"
- {UpcomingTaskDetails} - "/upcoming-task/:task_id"

### Components

-

###Redux

- Store
- Reducer
  - initial state
  - reducer function
  - action creators
  - action types (constant strings)
- Provider

## Back-end

### endpoints

- /api/ (GET, POST)
- /auth/callback
- /logout

###todo

- connect to database using massive
- set up server/index.js

###controllers

-

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
