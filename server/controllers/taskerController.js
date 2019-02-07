module.exports = {
  createProfile: (req, res) => {
    const database = req.app.get("db");
    let {
      user,
      name,
      email,
      phone,
      place,
      about,
      mounting,
      mountingHourly,
      delivery,
      deliveryHourly,
      yard,
      yardHourly,
      home,
      homeHourly,
      moving,
      movingHourly,
      pet,
      petHourly,
      furniture,
      furnitureHourly,
      cleaning,
      cleaningHourly,
      cooking,
      cookingHourly
    } = req.body;
    console.log(req.body, "body from controller");
    database
      .tasker_profile_create([
        user,
        name,
        email,
        phone,
        place,
        about,
        mounting,
        mountingHourly,
        delivery,
        deliveryHourly,
        yard,
        yardHourly,
        home,
        homeHourly,
        moving,
        movingHourly,
        pet,
        petHourly,
        furniture,
        furnitureHourly,
        cleaning,
        cleaningHourly,
        cooking,
        cookingHourly
      ])
      .then(() => res.status(200).send())
      .catch(err => {
        console.log("error in createProfile", err);
      });
  },
  editProfile: (req, res) => {
    const database = req.app.get("db");
    console.log(req.body, "body");
    console.log(req.params, "params");
    let {
      name,
      email,
      phone,
      location,
      about,
      mounting,
      mountingHourly,
      delivery,
      deliveryHourly,
      yard,
      yardHourly,
      home,
      homeHourly,
      moving,
      movingHourly,
      pet,
      petHourly,
      furniture,
      furnitureHourly,
      cleaning,
      cleaningHourly,
      cooking,
      cookingHourly
    } = req.body;
    let { user } = req.params;
    database
      .tasker_profile_edit([
        user,
        name,
        email,
        phone,
        location,
        about,
        mounting,
        mountingHourly,
        delivery,
        deliveryHourly,
        yard,
        yardHourly,
        home,
        homeHourly,
        moving,
        movingHourly,
        pet,
        petHourly,
        furniture,
        furnitureHourly,
        cleaning,
        cleaningHourly,
        cooking,
        cookingHourly
      ])
      .then(() => {
        res.status(200).send();
      })
      .catch(error => console.log("Error in editProfile", error));
  },

  getProfile: (req, res) => {
    const database = req.app.get("db");
    let { tasker_id } = req.params;
    database
      .tasker_profile_get([tasker_id])
      .then(profile => {
        res.status(200).send(profile[0]);
      })
      .catch(error => {
        console.log("error in getProfile in Controller", error);
      });
  }
};
