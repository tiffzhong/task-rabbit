
create table users(
    user_id serial primary key,
    name varchar(50),
    email varchar(50),
    picture text,
    auth0_id text
)

create table tasker_profile(
   tasker_profile_id serial primary key,
    tasker_id int references users(user_id), 
    name varchar(80), 
    email text,
    phone text,
    location text,
    about text 
)

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

create table tasker_skills(
    skills_id serial primary key,
    tasker_skill_id int references tasker_profile(tasker_profile_id),
    skill_name text,
    skill_price int,
    skill_image text 
)

-- To stay logged in. No need to sign in w Auth0 every time
CREATE TABLE "session" (
  "sid" varchar NOT NULL COLLATE "default",
    "sess" json NOT NULL,
    "expire" timestamp(6) NOT NULL
)
WITH (OIDS=FALSE);
ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;

select * from "session";