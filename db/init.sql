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
select * from users

drop table tasker_profile;
drop table tasker_expertise;

create table tasker_profile(
   tasker_profile_id serial primary key,
    name varchar(80), 
    email text,
    phone text,
    location text,
    about text 
)
select * from tasker_profile;

create table tasker_expertise(
    skills_id serial primary key,
    tasker_profile_id int references tasker_profile(tasker_profile_id),
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

select * from tasker_expertise;


-- To stay logged in. No need to sign in w Auth0 every time
CREATE TABLE "session" (
  "sid" varchar NOT NULL COLLATE "default",
    "sess" json NOT NULL,
    "expire" timestamp(6) NOT NULL
)
WITH (OIDS=FALSE);
ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;

select * from "session";