module.exports = {
  getUser: db => {
    return db.query("select * from users");
  },
  createUser: (db, user) => {
    return db.query(
      "insert into users (name, email, picture, auth0_id) values (${name}, ${email}, ${picture}, ${auth0_id}) returning *;",
      {
        user_id: user.user_id,
        name: user.name,
        email: user.email,
        picture: user.picture,
        auth0_id: user.auth0_id
      }
    );
  },
  createClient: (db, bookedTask) => {
    return db.query(
      "insert into bookedTasks(taskType, locationStart, locationEnd, lat, long, duration, vehicle, startDate, endDate, taskDetails, user_id) values (${taskType}, ${locationStart}, ${locationEnd}, ${lat}, ${long}, ${duration}, ${vehicle}, ${startDate}, ${endDate}, ${taskDetails}, ${user_id}) returning *;",
      {
        id: bookedTask.id,
        taskType: bookedTask.taskType,
        locationStart: bookedTask.locationStart,
        locationEnd: bookedTask.locationEnd,
        lat: bookedTask.lat,
        long: bookedTask.long,
        duration: bookedTask.duration,
        vehicle: bookedTask.vehicle,
        startDate: bookedTask.startDate,
        endDate: bookedTask.endDate,
        taskDetails: bookedTask.taskDetails,
        user_id: bookedTask.user_id
      }
    );
  },
  createMessage: (db, message) => {
    return db.query(
      "insert into messages (confirmation_id, date, poster_id, poster_name, poster_image, message) values(${confirmation_id}, ${date}, ${poster_id}, ${poster_name}, ${poster_image}, ${message}); select * from messages where confirmation_id = 30",
      {
        confirmation_id: message.confirmation_id,
        date: message.date,
        poster_id: message.poster_id,
        poster_name: message.poster_name,
        poster_image: message.poster_image,
        message: message.message
      }
    );
  },
  createEmail: (db, email) => {
    return db.query("insert into nodemailerEmail (email) values (${email});", {
      email: email.email
    });
  },

  updateTaskerProfile: (db, taskerProfile) => {
    return db.query(
      "update tasker_profile set tasker_name = ${tasker_name}, email = ${email}, selfie = ${selfie}, phone = ${phone}, location = ${location}, about = ${about}, mounting = ${mounting}, mountingHourly = ${mountingHourly}, delivery = ${delivery}, deliveryHourly = ${deliveryHourly}, yard = ${yard}, yardHourly = ${yardHourly}, home = ${home}, homeHourly = ${homeHourly}, moving = ${moving}, movingHourly= ${movingHourly}, pet = ${pet}, petHourly = ${petHourly}, furniture = ${furniture}, furnitureHourly = ${furnitureHourly}, cleaning = ${cleaning}, cleaningHourly = ${cleaningHourly}, cooking = ${cooking}, cookingHourly = ${cookingHourly} where tasker_id = 'github|28162481' returning *;",
      {
        tasker_name: taskerProfile.tasker_name,
        email: taskerProfile.email,
        selfie: taskerProfile.selfie,
        phone: taskerProfile.phone,
        location: taskerProfile.location,
        about: taskerProfile.about,
        mounting: taskerProfile.mounting,
        mountingHourly: taskerProfile.mountingHourly,
        delivery: taskerProfile.delivery,
        deliveryHourly: taskerProfile.deliveryHourly,
        yard: taskerProfile.yard,
        yardHourly: taskerProfile.yardHourly,
        home: taskerProfile.home,
        homeHourly: taskerProfile.homeHourly,
        moving: taskerProfile.moving,
        movingHourly: taskerProfile.movingHourly,
        pet: taskerProfile.pet,
        petHourly: taskerProfile.petHourly,
        furniture: taskerProfile.furniture,
        furnitureHourly: taskerProfile.furnitureHourly,
        cleaning: taskerProfile.cleaning,
        cleaningHourly: taskerProfile.cleaningHourly,
        cooking: taskerProfile.cooking,
        cookingHourly: taskerProfile.cookingHourly,
        tasker_id: "github|39362114"
      }
    );
  }
};
