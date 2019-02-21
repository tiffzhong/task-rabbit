create table users(
    user_id serial primary key,
    name varchar(50),
    email varchar(50),
    picture text,
    auth0_id text
)


-- Client Tables
create table bookedTasks (
    id serial primary key,
    taskType text,
    locationStart text,
    locationEnd text,
    lat numeric (15,6),
    long numeric (15,6),
    duration text,
    vehicle text,
    startDate text,
    endDate text,
    taskDetails text,
    user_id text
);

drop table bookedTasks;


select * from bookedTasks;



-- Tasker Tables
select * from users;
select * from bookedtasks;
drop table tasker_profile;

create table tasker_profile(
   tasker_profile_id serial primary key,
   tasker_id text,
    tasker_name varchar(80), 
    selfie text,
    email text,
    phone text,
    location text,
    about text,
    mounting boolean,
    mountingHourly text,
    delivery boolean,
    deliveryHourly text,
    yard boolean,
    yardHourly text,
    home boolean,
    homeHourly text,
    moving boolean,
    movingHourly text,
    pet boolean,
    petHourly text,
    furniture boolean,
    furnitureHourly text,
    cleaning boolean,
    cleaningHourly text,
    cooking boolean,
    cookingHourly text
)


select * from tasker_profile;

----CONFIRMED TASK 
create table confirmed_task(
confirmation_id serial primary key,
created_date text,
task text,
client_id text,
tasker_id text,
tasker_hourly text,
start_date text,
end_date text,
location_start text,
location_end text,
duration text,
task_details text,
lat numeric (15,6),
long numeric (15,6),
vehicle text
);

select * from confirmed_task;



-- To stay logged in. No need to sign in w Auth0 every time
CREATE TABLE "session" (
  "sid" varchar NOT NULL COLLATE "default",
    "sess" json NOT NULL,
    "expire" timestamp(6) NOT NULL
)
WITH (OIDS=FALSE);
ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;

select * from "session";

create table client_review(
    id serial primary key,
    user_id text,
    tasker_id text,
    review text,
    created_date text
)

create table nodemailerEmail(
  id serial primary key,
  email text
)


-- create table picktasker(
--    id serial primary key,
--    user_id  text,
--    tasker_id text,
--    completed boolean,
--    created_date text,
--    confirmation_number text
-- )

-- booked task has tasker_id text column
-- --join table for confirmation component--
-- select t.tasker_id, t.email, t.tasker_name,t.selfie, t.mounting, t.mountinghourly, t.delivery, t.deliveryhourly, t.yard, t.yardhourly, t.home, t.homehourly, t.moving, t.movinghourly, t.pet, t.pethourly, t.furniture, t.furniturehourly, t.cleaning, t.cleaninghourly, t.cooking, t.cookinghourly, b.user_id,b.locationstart, b.locationend, b.startdate, b.enddate, b.duration, b.taskdetails, b.tasktype, u.name, u.email, u.picture
-- from tasker_profile t
-- join bookedtasks b
-- on t.tasker_id =  b.tasker_id
-- join users u
-- on  u.auth0_id = b.user_id
-- where b.user_id = 'github|42826280'



select * from bookedTasks;
select * from tasker_profile;
select * from confirmed_task;

select * from tasker_profile
join bookedTasks on tasker_profile_id = decks.id
where decks.id = $1;

delete from confirmed_task where confirmation_id < 100;

delete from bookedTasks;
drop table bookedTasks;

select * from users;

create table bookedTasks (
    id serial primary key,
    taskType text,
    locationStart text,
    locationEnd text,
    lat numeric (15,6),
    long numeric (15,6),
    duration text,
    vehicle text,
    startDate text,
    endDate text,
    taskDetails text,
    user_id text
);

create table messages(
    id serial primary key,
    confirmation_id integer,
    date text,
    poster_id text,
    poster_name text,
    poster_image text,
    message text
);
drop table messages;
select * from messages;

create table personal_messages(

);


select * from confirmed_task;

select * from confirmed_task
join tasker_profile on tasker_profile.tasker_id = confirmed_task.tasker_id
where client_id = 'github|42826280';