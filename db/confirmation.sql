
select t.tasker_id, t.email, t.tasker_name,t.selfie, t.mounting, t.mountinghourly, t.delivery, t.deliveryhourly, t.yard, t.yardhourly, t.home, t.homehourly, t.moving, t.movinghourly, t.pet, t.pethourly, t.furniture, t.furniturehourly, t.cleaning, t.cleaninghourly, t.cooking, t.cookinghourly, b.user_id,b.locationstart, b.locationend, b.startdate, b.enddate, b.duration, b.taskdetails, b.tasktype, u.name, u.email, u.picture
from tasker_profile t
join bookedtasks b
on t.tasker_id =  b.tasker_id
join users u
on  u.auth0_id = b.user_id
where b.user_id = 'github|42826280'
-- 'github|42826280'