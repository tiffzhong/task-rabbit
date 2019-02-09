module.exports = {

    confirmationForm: (req, res) => {
        console.log("body", req.body)
        const { user_id } = req.body;
        const db = req.app.get("db");
        db.confirmation([user_id]).then(confirm => {
            res.status(200).json(confirm)
        })
    }

};
