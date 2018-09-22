
const axios = require('axios');

module.exports = {
    getReview: (req, res) => {
        axios.get(`https://randomuser.me/api/?results=2`, {
        })
            .then(results => {
                res.status(200).send(results.data)
            })
    }
};