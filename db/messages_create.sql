insert into messages (confirmation_id, date, poster_id, poster_name, poster_image, message)
values ($1, $2, $3, $4, $5, $6);
select * from messages where confirmation_id = $1;

