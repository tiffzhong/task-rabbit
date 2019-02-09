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


booked task has tasker_id text column
--join table for confirmation component--
select t.tasker_id, t.email, t.tasker_name,t.selfie, t.mounting, t.mountinghourly, t.delivery, t.deliveryhourly, t.yard, t.yardhourly, t.home, t.homehourly, t.moving, t.movinghourly, t.pet, t.pethourly, t.furniture, t.furniturehourly, t.cleaning, t.cleaninghourly, t.cooking, t.cookinghourly, b.user_id,b.locationstart, b.locationend, b.startdate, b.enddate, b.duration, b.taskdetails, b.tasktype, u.name, u.email, u.picture
from tasker_profile t
join bookedtasks b
on t.tasker_id =  b.tasker_id
join users u
on  u.auth0_id = b.user_id
where b.user_id = 'github|42826280'