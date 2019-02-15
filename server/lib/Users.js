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
      "insert into bookedTasks(taskType, locationStart, locationEnd, lat, long, duration, vehicle, startDate, endDate, taskDetails, user_id) values (${taskType}, ${locationStart}, ${locationEnd},${lat}, ${long}, ${duration}, ${vehicle}, ${startDate}, ${endDate}, ${taskDetails}, ${user_id}) returning *;",
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
  }
};
