select * from confirmed_task
join tasker_profile on tasker_profile.tasker_id = confirmed_task.tasker_id
where client_id = $1;