module.exports = {
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
      .then(resp => {
        res.send(resp);
        console.log("You created a new task", resp);
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
    database
      .client_update_edit([
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
    const db = req.app.get("db");
    var p1 = db.allTaskers();
    var p2 = db.allClient();
    Promise.all([p1, p2])
      .then(response => {
        res.send(response);
      })
      .catch(error => {
        console.log("Error in allTaskers", error);
      });
  },
  getClient: (req, res) => {
    const database = req.app.get("db");
    const { client_id } = req.params;
    database
      .client_get([client_id])
      .then(client => {
        res.send(client[0]);
      })
      .catch(error => {
        console.log(error, "error in getclient");
      });
  }
};
