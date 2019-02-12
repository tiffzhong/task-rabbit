module.exports = {
  confirmed: (req, res) => {
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
    console.log(req.body, "body from confirmationcontroller");
    database
      .confirm_task({
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
        res.status(200).send(response);
      })
      .catch(error => {
        console.log(error, "error in confirmed");
      });
  }
};
