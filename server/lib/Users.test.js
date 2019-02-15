const sinon = require("sinon");
const UsersData = require("./Users");
const testDB = require("../../test/init");

//Unit Tests
describe("Unit Tests", () => {
  describe("getUser function", () => {
    it("Should return user where auth0_id = 1", () => {
      const users = {
        query: sinon.mock().withArgs(sinon.match.string)
      };
      return UsersData.getUser(users);
    });
  }),
    describe("Create User", () => {
      it("Should create a new users to the server/db", () => {
        const users = {
          query: sinon.mock().withArgs(sinon.match.string)
        };
        const user = {
          name: "tiffz",
          email: "tiffzhong@gmail.com",
          picture: "https://avatars1.githubusercontent.com/u/28162481?v=4",
          auth0_id: "github|28162481"
        };
        return UsersData.createUser(users, user);
      });
    }),
    describe("Create Booked Task", () => {
      it("Should create a new booked task", () => {
        const bookedTasks = {
          query: sinon.mock().withArgs(sinon.match.string)
        };
        const bookedTask = {
          taskType: "Delivery Service",
          locationStart: "2348 N 7th St, Phoenix, AZ 85006, USA",
          locationEnd: "3450 N 7th St, Phoenix, AZ 85014, USA",
          lat: "33.488093",
          long: "-112.065685",
          duration: "Est. 1 hr",
          vehicle: "Truck",
          startDate: "2019-02-16T17:30:25.473Z",
          endDate: "2019-02-17T17:30:25.500Z",
          taskDetails: "boogers r the deetz",
          user_id: "github|28162481"
        };
        return UsersData.createClient(bookedTasks, bookedTask);
      });
    }),
    describe("Create Message", () => {
      it("Should create a new message", () => {
        const messages = {
          query: sinon.mock().withArgs(sinon.match.string)
        };
        const message = {
          confirmation_id: 30,
          date: "leh dateh",
          poster_id: "githubeh ideh",
          poster_name: "nameh",
          poster_image: "imageh",
          message: "messageeh"
        };
        return UsersData.createMessage(messages, message);
      });
    }),
    describe("Should Successfully Insert into Nodemailer Table", () => {
      it("Should insert into nodemailer", () => {
        const emails = {
          query: sinon.mock().withArgs(sinon.match.string)
        };
        const email = {
          email: "This is the email"
        };
        return UsersData.createEmail(emails, email);
      });
    }),
    describe("Update tasker profile", () => {
      it("Should update tasker profile", () => {
        const taskerProfiles = {
          query: sinon.mock().withArgs(sinon.match.string)
        };
        const taskerProfile = {
          tasker_name: "Tasker Name",
          email: "Tasker Email",
          selfie: "text",
          phone: "text",
          location: "text",
          about: "text",
          mounting: false,
          mountingHourly: "text",
          delivery: false,
          deliveryHourly: "text",
          yard: false,
          yardHourly: "text",
          home: false,
          homeHourly: "text",
          moving: false,
          movingHourly: "text",
          pet: false,
          petHourly: "text",
          furniture: false,
          furnitureHourly: "text",
          cleaning: true,
          cleaningHourly: "text",
          cooking: true,
          cookingHourly: "text"
        };
        return UsersData.updateTaskerProfile(taskerProfiles, taskerProfile);
      });
    });
});

//Integration Tests
describe("Integration Tests", () => {
  let db;
  beforeAll(() => {
    return testDB.initDb().then(database => {
      db = database;
    });
  });
  describe("getUser function", () => {
    it("Should get user from auth0 login", () => {
      return UsersData.getUser(db).then(user => {
        // console.log(user, "usah");
        // expect(user.length).toBe(user.length > 1);
        expect(user.length).not.toBe(0);
        expect(user[0]).toMatchObject({
          user_id: expect.any(Number),
          name: expect.any(String),
          email: expect.any(String),
          picture: expect.any(String),
          auth0_id: expect.any(String)
        });
      });
    });
  });

  describe("Creating user from auth0 login", () => {
    it("Should create a user from auth0 login", () => {
      const user = {
        name: "tiffz",
        email: "tiffzhong@gmail.com",
        picture: "https://avatars1.githubusercontent.com/u/28162481?v=4",
        auth0_id: "github|28162481"
      };
      return UsersData.createUser(db, user).then(newUser => {
        expect(newUser.length).not.toEqual(0);
        expect(newUser[0]).toMatchObject({
          user_id: expect.any(Number),
          name: expect.any(String),
          email: expect.any(String),
          picture: expect.any(String),
          auth0_id: expect.any(String)
        });
      });
    });
  });

  describe("Creating a new booked task", () => {
    it("Should create a new booked task", () => {
      const bookedTask = {
        taskType: "Delivery Service",
        locationStart: "2348 N 7th St, Phoenix, AZ 85006, USA",
        locationEnd: "3450 N 7th St, Phoenix, AZ 85014, USA",
        lat: "33.488093",
        long: "-112.065685",
        duration: "Est. 1 hr",
        vehicle: "Truck",
        startDate: "2019-02-16T17:30:25.473Z",
        endDate: "2019-02-17T17:30:25.500Z",
        taskDetails: "boogers r the deetz",
        user_id: "github|28162481"
      };
      return UsersData.createClient(db, bookedTask).then(newBookedTask => {
        expect(newBookedTask.length).not.toEqual(0);
        expect(newBookedTask[0]).toMatchObject({
          id: expect.any(Number),
          tasktype: expect.any(String),
          locationstart: expect.any(String),
          locationend: expect.any(String),
          lat: expect.any(String),
          long: expect.any(String),
          duration: expect.any(String),
          vehicle: expect.any(String),
          startdate: expect.any(String),
          enddate: expect.any(String),
          taskdetails: expect.any(String),
          user_id: expect.any(String)
        });
      });
    });
  });

  describe("Creating a new Message", () => {
    it("Should create a new message", () => {
      const message = {
        confirmation_id: 30,
        date: "leh dateh",
        poster_id: "githubeh ideh",
        poster_name: "nameh",
        poster_image: "imageh",
        message: "messageeh"
      };
      return UsersData.createMessage(db, message).then(newMessage => {
        expect(newMessage.length).not.toEqual(0);
        expect(newMessage[0]).toMatchObject({
          confirmation_id: expect.any(Number),
          date: expect.any(String),
          poster_id: expect.any(String),
          poster_name: expect.any(String),
          poster_image: expect.any(String),
          message: expect.any(String)
        });
      });
    });
  });

  describe("Inserting into Nodemailer table", () => {
    it("Should create a nodemailer", () => {
      const email = {
        email: "This is the email"
      };
      return UsersData.createEmail(db, email).then(newEmail => {
        expect(newEmail.length).toEqual(0);
      });
    });
  });

  describe("editing tasker profile", () => {
    it("Should edit the tasker profile", () => {
      const taskerProfile = {
        tasker_name: "Tasker Name",
        email: "Tasker Email",
        selfie: "text",
        phone: "4801234566",
        location: "text",
        about: "text",
        mounting: false,
        mountingHourly: "text",
        delivery: false,
        deliveryHourly: "text",
        yard: false,
        yardHourly: "text",
        home: false,
        homeHourly: "text",
        moving: false,
        movingHourly: "text",
        pet: false,
        petHourly: "text",
        furniture: false,
        furnitureHourly: "text",
        cleaning: true,
        cleaningHourly: "text",
        cooking: true,
        cookingHourly: "text",
        tasker_id: "text"
      };
      return UsersData.updateTaskerProfile(db, taskerProfile).then(
        newTaskerProfile => {
          expect(newTaskerProfile.length).not.toEqual(0);
          expect(newTaskerProfile[0]).toMatchObject({
            tasker_id: expect.any(String),
            tasker_name: expect.any(String),
            email: expect.any(String),
            selfie: expect.any(String),
            phone: expect.any(String),
            location: expect.any(String),
            about: expect.any(String),
            mounting: expect.any(Boolean),
            mountinghourly: expect.any(String),
            delivery: expect.any(Boolean),
            deliveryhourly: expect.any(String),
            yard: expect.any(Boolean),
            yardhourly: expect.any(String),
            home: expect.any(Boolean),
            homehourly: expect.any(String),
            moving: expect.any(Boolean),
            movinghourly: expect.any(String),
            pet: expect.any(Boolean),
            pethourly: expect.any(String),
            furniture: expect.any(Boolean),
            furniturehourly: expect.any(String),
            cleaning: expect.any(Boolean),
            cleaninghourly: expect.any(String),
            cooking: expect.any(Boolean),
            cookinghourly: expect.any(String)
          });
        }
      );
    });
  });
});
