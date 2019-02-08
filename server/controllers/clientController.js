module.exports = {
    bookTask: (req, res) => {
        console.log('req.body ========>', req.body)
        const { taskType, locationStart, locationEnd, lat, long, duration, vehicle, startDate, endDate, taskDetails, user_id } = req.body;
        const db = req.app.get('db');
        db.client_create([
            taskType, 
            locationStart,
            locationEnd,
            lat,
            long, 
            duration,
            vehicle, 
            startDate, 
            endDate, 
            taskDetails,
            user_id
        ]).then(() => {
            console.log('You created a new task')
            
        }).catch(error => {
            console.log('Error in Booktask', error);
        })
    }
};
