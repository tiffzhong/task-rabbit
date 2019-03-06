module.exports = {
  createConfirmed: (req, res) => {
    const database = req.app.get("db");
    let {
      created_date,
      task,
      client_id,
      tasker_id,
      tasker_hourly,
      start_date,
      end_date,
      location_start,
      location_end,
      duration,
      task_details,
      lat,
      long,
      vehicle
    } = req.body;
    // console.log(req.body, "body from confirmationcontroller");
    database
      .confirm_task_create({
        created_date,
        task,
        client_id,
        tasker_id,
        tasker_hourly,
        start_date,
        end_date,
        location_start,
        location_end,
        duration,
        task_details,
        lat,
        long,
        vehicle
      })
      .then(response => {
        console.log(response, "response from confirm task create");
        res.status(200).send(response);
      })
      .catch(error => {
        console.log(error, "error in confirmed");
      });
  },

  getConfirmation: (req, res) => {
    const database = req.app.get("db");
    let { confirmation_id } = req.params;
    console.log(req.params, "r ya here mr.params?");
    database
      .confirm_task_get([confirmation_id])
      .then(conformation => {
        res.status(200).send(conformation[0]);
      })
      .catch(error => {
        console.log(error, "getConfirmation error");
      });
  }
};
