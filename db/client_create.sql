insert into bookedTasks(
    task,
    locationStart,
    locationEnd,
    lat,
    long,
    duration,
    vehicle,
    startDate,
    endDate,
    taskDetails,
    client_id,
)values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)