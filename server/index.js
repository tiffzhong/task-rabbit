const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const massive = require("massive");
const dotenv = require("dotenv");
const connect = require("connect-pg-simple");
dotenv.config();

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
  .then(database => {
    app.set("db", database);
  })
  .catch(error => {
    console.log("error with massive", error);
  });

app.use(
  session({
    store: new (connect(session))({
      conString: process.env.CONNECTION_STRING
    }),
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
);

//Controllers
const authController = require("./controllers/authContoller");
const taskerController = require("./controllers/taskerController");
const clientController = require("./controllers/clientController");

//Endpoints
//Auth
app.get("/auth/callback", authController.login);
app.get("/auth/user-data", authController.getUser);
app.post("/auth/logout", authController.logout);

//Tasker
app.post("/api/tasker", taskerController.createProfile);
app.get("/api/tasker/:tasker_id", taskerController.getProfile);
app.put("/api/tasker/:tasker_id", taskerController.editProfile);

//Client
app.post('/api/client', clientController.bookTask);
app.put("/api/client/:client_id", clientController.editTask);



const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
