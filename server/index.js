const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const massive = require("massive");
const dotenv = require("dotenv");
const connect = require("connect-pg-simple");
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(express.static(`__dirname/../build`));

massive(process.env.CONNECTION_STRING)
  .then(database => {
    app.set("db", database);
  })
  .catch(error => {
    console.log("error with massive", error);
  });

const path = require("path");
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
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
const confirmationController = require("./controllers/confirmationController");
const messagesController = require("./controllers/messagesController");
const stripeController = require("./controllers/stripeController");
//Endpoints
//Auth
app.get("/auth/callback", authController.login);
app.get("/auth/user-data", authController.getUser);
app.post("/auth/logout", authController.logout);

//Tasker
app.post("/api/tasker", taskerController.createProfile);
app.get("/api/tasker", taskerController.getAllTaskers);
app.get("/api/tasker/:tasker_id", taskerController.getProfile);
app.put("/api/tasker/:tasker_id", taskerController.editProfile);

//Client
app.post("/api/client", clientController.bookTask);
app.put("/api/client/:confirmation_id", clientController.editTask);
app.get("/api/pickatasker", clientController.allTaskers);
app.get("/api/client/:client_id", clientController.getClient);

//Confirmation
app.post("/api/confirmed", confirmationController.createConfirmed);
app.get(
  "/api/confirmed/:confirmation_id",
  confirmationController.getConfirmation
);
//nodemailer
app.post("/api/email", clientController.nodemailerEmail);

//stripe
app.post("/api/stripe", stripeController.stripeCheckout);

//Messages
app.get("/messages/:id", messagesController.getClientMessages);
app.get("/api/personal/messages/:id", messagesController.getMessages);
app.post("/api/messages", messagesController.createMessage);
// app.get('/api/messages', messagesController.getMessages);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
