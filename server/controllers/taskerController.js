module.exports = {
  createProfile: (req, res) => {
    const database = req.app.get("db");
    let {
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
    } = req.body;
    console.log(req.body, "body from controller");
    database
      .tasker_create([
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
      .then(() => res.status(200).send())
      .catch(err => {
        console.log("error in createProfile", err);
      });
  },
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

  // addExpertise: (req, res) => {
  //   const database = req.app.get("db");
  //   let {
  //     tasker_profile_id,
  //     mounting,
  //     mountingHourly,
  //     delivery,
  //     deliveryHourly,
  //     yard,
  //     yardHourly,
  //     home,
  //     homeHourly,
  //     moving,
  //     movingHourly,
  //     pet,
  //     petHourly,
  //     furniture,
  //     furnitureHourly,
  //     cleaning,
  //     cleaningHourly,
  //     cooking,
  //     cookingHourly
  //   } = req.body;
  //   console.log(
  //     req.body,
  //     "body of addExpertise",
  //     /true/i.test(mounting),
  //     typeof /true/i.test(mounting)
  //   );
  //   database
  // .tasker_expertise_add([
  //   tasker_profile_id,
  //   /true/i.test(mounting),
  //   mountingHourly,
  //   /true/i.test(delivery),
  //   deliveryHourly,
  //   /true/i.test(yard),
  //   yardHourly,
  //   /true/i.test(home),
  //   homeHourly,
  //   /true/i.test(moving),
  //   movingHourly,
  //   /true/i.test(pet),
  //   petHourly,
  //   /true/i.test(furniture),
  //   furnitureHourly,
  //   /true/i.test(cleaning),
  //   cleaningHourly,
  //   /true/i.test(cooking),
  //   cookingHourly
  //     ])
  //     .then(newTaskerProfile => res.status(200).send(newTaskerProfile[0]))
  //     .catch(err => {
  //       console.log("error in addExpertise", err);
  //     });
  // },

  getProfile: (req, res) => {
    const database = req.app.get("db");
    let { tasker_id } = req.params;
    database.tasker_profile_get([tasker_id]).then(profile => {
      res.status(200).send(profile[0]);
    });
    // let { name, email, phone, location, about } = req.body;
    console.log(req.body, "body");
  }
};
