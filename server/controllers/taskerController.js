module.exports = {
  createProfile: (req, res) => {
    const database = req.app.get("db");
    let { tasker_id, name, email, phone, location, about } = req.body;
    database
      .tasker_create([tasker_id, name, email, phone, location, about])
      .then(() => res.status(200).send())
      .catch(err => {
        console.log("error in createProfile", err);
      });
  }
  // editProfile: (req, res) => {
  //   const database = req.app.get("db");
  //   let { name, email, phone, location, about } = req.body;
  //   let { tasker_id } = req.params;
  //   console.log(req.params, "params");
  //   console.log(req.params, "body");
  //   database
  //     .tasker_edit([tasker_id, name, email, phone, location, about])
  //     .then(() => {
  //       res.status(200).send();
  //     })

  //     .catch(error => console.log("Error in editProfile", error));
  // }
};
