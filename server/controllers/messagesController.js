module.exports = {
    getClientMessages: (req, res) => {
        const { id } = req.params;
        console.log('---->>> req.params', req.params);
        const db = req.app.get('db');
        db.confirm_client_task_get(id).then(confirmations => {
            res.status(200).send(confirmations);
        }).catch(error => {
            console.log('error in getClientMessages', error);
            res.status(500).send('Something is wrong with your server');
        })
    }
}