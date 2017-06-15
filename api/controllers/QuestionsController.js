/**
 * QuestionsController
 *
 * @description :: Server-side logic for managing questions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  random: function (req, res) {
        Questions.find().then(function (questions) {
            var obj = questions[Math.floor(Math.random()*questions.length)]
            return res.send(obj);
        }).catch(function (err) {
            return res.send('500', {message: "Sorry, an error occurd - " + err});
        });
    },
}