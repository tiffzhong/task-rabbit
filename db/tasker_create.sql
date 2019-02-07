insert into tasker_profile
( tasker_id,
                  name,
                  email,
                  phone,
                  location,
                  about,
                  mounting,
                  mountingHourly,
                  delivery,
                  deliveryHourly,
                  yard,
                  yardHourly,
                  home,
                  homeHourly,
                  moving,
                  movingHourly,
                  pet,
                  petHourly,
                  furniture,
                  furnitureHourly,
                  cleaning,
                  cleaningHourly,
                  cooking,
                  cookingHourly)
values($1, 
$2, 
$3, 
$4, 
$5,
$6,
$7,
$8,
$9,
$10,
$11,
$12,
$13,
$14,
$15,
$16,
$17,
$18,
$19,
$20,
$21,
$22,
$23,
$24)
returning *;