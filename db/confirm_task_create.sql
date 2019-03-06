insert into confirmed_task (
created_date,
task,
client_id,
tasker_id,
tasker_hourly,
start_date,
end_date,
location_start,
location_end,
duration,
task_details,
lat,
long,
vehicle
)
values (
${created_date},
${task},
${client_id},
${tasker_id},
${tasker_hourly},
${start_date},
${end_date},
${location_start},
${location_end},
${duration},
${task_details},
${lat},
${long},
${vehicle}
)
returning *;