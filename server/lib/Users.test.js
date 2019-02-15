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
          lat: 33.488093,
          long: -112.065685,
          duration: "Est. 1 hr",
          vehicle: "Truck",
          startDate: "2019-02-16T17:30:25.473Z",
          endDate: "2019-02-17T17:30:25.500Z",
          taskDetails: "boogers r the deetz",
          user_id: "github|28162481"
        };
        return UsersData.createClient(bookedTasks, bookedTask);
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
          taskType: expect.any(String),
          locationStart: expect.any(String),
          locationEnd: expect.any(String),
          lat: expect.any(String),
          long: expect.any(String),
          duration: expect.any(String),
          vehicle: expect.any(String),
          startDate: expect.any(String),
          endDate: expect.any(String),
          taskDetails: expect.any(String),
          user_id: expect.any(String)
        });
      });
    });
  });
});
