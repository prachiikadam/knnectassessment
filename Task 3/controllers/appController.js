

module.exports.getAnswers = function (req, res) {
    if (!req.query.durationType || !req.query.duration) {
        res.send({ 'status': 'failure', 'message': 'Missing parameters' })
    } else {

        /**
         * set when given date is provided
         */

        let inputDate = req.query.inputDate ? new Date(req.query.inputDate) : new Date();
        /**
         * set to days or weeks
         */
        let durationType = req.query.durationType
        let duration = durationType.toLowerCase() == 'weeks' ? req.query.duration * 7 : req.query.duration; //In Days
        inputDate.setTime(inputDate.getTime() + (duration * 24 * 60 * 60 * 1000));
        res.send({ "status": "suceess", "answer": inputDate })
    }
}