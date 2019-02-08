create table users(
    user_id serial primary key,
    name varchar(50),
    email varchar(50),
    picture text,
    auth0_id text
)


-- Client Tables
create table client_profile(
    client_profile_id serial primary key,
    client_id int references users(user_id), 
    location text
)
create table reviews(
    review_id serial primary key,
    review_body text,
    rating integer, 
    review_date date
)

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

-- To stay logged in. No need to sign in w Auth0 every time
CREATE TABLE "session" (
  "sid" varchar NOT NULL COLLATE "default",
    "sess" json NOT NULL,
    "expire" timestamp(6) NOT NULL
)
WITH (OIDS=FALSE);
ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;

select * from "session";