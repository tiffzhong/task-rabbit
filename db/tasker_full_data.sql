select * from tasker_profile
join tasker_expertise
on tasker_expertise.tasker_profile_id = tasker_profile.tasker_profile_id
where tasker_profile.tasker_profile_id = $1;
