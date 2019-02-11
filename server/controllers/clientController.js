module.exports = {
  confirmationForm: (req, res) => {
    // console.log("body", req.body)
    const { user_id } = req.body;
    const db = req.app.get("db");
    db.confirmation([user_id])
      .then(confirm => {
        res.status(200).json(confirm);
      })
      .catch(error => {
        console.log("Error in ConfirmForm", error);
      });
  },
  bookTask: (req, res) => {
    // console.log('req.body ========>', req.body)
    const {
      taskType,
      locationStart,
      locationEnd,
      lat,
      long,
      duration,
      vehicle,
      startDate,
      endDate,
      taskDetails,
      user_id
    } = req.body;
    const db = req.app.get("db");
    db.client_create([
      taskType,
      locationStart,
      locationEnd,
      lat,
      long,
      duration,
      vehicle,
      startDate,
      endDate,
      taskDetails,
      user_id
    ])
      .then(() => {
        console.log("You created a new task");
      })
      .catch(error => {
        console.log("Error in Booktask", error);
      });
  },

  editTask: (req, res) => {
    const database = req.app.get("db");
    // console.log(req.body, "body");
    // console.log(req.params, "params");
    let {
      client_id,
      locationStart,
      locationEnd,
      lat,
      long,
      duration,
      vehicle,
      startDate,
      endDate,
      taskDetails
    } = req.body;
    // let { client_id } = req.params;
    database
      .tasker_profile_edit([
        client_id,
        locationStart,
        locationEnd,
        lat,
        long,
        duration,
        vehicle,
        startDate,
        endDate,
        taskDetails
      ])
      .then(() => {
        res.status(200).send();
      })
      .catch(error =>
        console.log("Error in editTask in clientController", error)
      );
  },
  allTaskers: (req, res) => {
    console.log("response All tasker");
    // console.log("req.params===NAT", req.params)
    // const { tasktype} = req.params
    const db = req.app.get("db");
    var p1 = db.allTaskers();
    var p2 = db.allClient();
    Promise.all([p1, p2])
      .then(responser => {
        res.send(responser);
      })
      .catch(error => {
        console.log("Error in allTaskers", error);
      });
  }
};
