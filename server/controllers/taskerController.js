module.exports = {
  createProfile: (req, res) => {
    const database = req.app.get("db");
    let {
      user,
      name,
      email,
      selfie,
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
        selfie,
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
      .then(response => res.status(200).send(response))
      .catch(err => {
        console.log("error in createProfile", err);
      });
  },
  editProfile: (req, res) => {
    const database = req.app.get("db");
    console.log(req.body, "body editprofile controler");
    console.log(req.params, "params editprogile contrller");
    let {
      tasker_name,
      email,
      selfie,
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
    let { tasker_id } = req.params;
    database
      .tasker_profile_edit([
        tasker_id,
        tasker_name,
        email,
        selfie,
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
    console.log("req.params getProfile", req.params);
    database
      .tasker_profile_get([tasker_id])
      .then(profile => {
        res.status(200).send(profile[0]);
      })
      .catch(error => {
        console.log("error in getProfile in Controller", error);
      });
  },

  getAllTaskers: (req, res) => {
    const db = req.app.get('db');
    db.allTaskers().then(response => {
      res.status(200).json(response);
    }).catch(error => {
      console.log('Error in getAllTaskers @taskerController', error);
    })
  }
};
