module.exports = {
    getClientTasks: (req, res) => {
        const { id } = req.params;
        console.log('---->>> req.params', req.params);
        const db = req.app.get('db');
        db.confirm_client_task_get(id).then(confirmations => {
            res.status(200).send(confirmations);
        }).catch(error => {
            console.log('error in getClientMessages', error);
            res.status(500).send('Something is wrong with your server');
        })
    },

    getMessages: (req, res) => {
        const { id } = req.params;
        console.log('----id-----', id);
        const db = req.app.get('db');
        db.messages_get(id).then(response => {
            console.log('response in getMessages', response)
            res.status(200).json(response);
        }).catch(error => {
            console.log('error in getMessages', error);
        })
    },

    createMessage: (req, res) => {
        console.log('---- createMessage req.body', req.body)
        const { id, date, user_id, user_name, user_image, message } = req.body
        const db = req.app.get('db');
        db.messages_create([
            id,
            date,
            user_id,
            user_name,
            user_image,
            message
        ]).then(messages => {
            res.status(200).json(messages)
        })
    },

    // getTaskerInfo
}