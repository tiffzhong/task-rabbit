update tasker_profile
set
name = $2,
email = $3,
phone = $4,
location = $5,
about = $6
where tasker_profile_id = $1