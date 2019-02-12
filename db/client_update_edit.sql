update bookedTasks
set
locationStart = $2,
locationEnd = $3,
lat = $4,
long = $5,
duration = $6,
vehicle = $7,
startDate = $8,
endDate = $9,
taskDetails = $10,
where client_id = $1