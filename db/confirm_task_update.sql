update confirmed_task
set
location_start = $2,
location_end = $3,
lat = $4,
long = $5,
duration = $6,
vehicle = $7,
start_date = $8,
end_date = $9,
task_details = $10
where confirmation_id = $1
returning * ;

