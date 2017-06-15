/**
 * ScoreController
 *
 * @description :: Server-side logic for managing scores
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	score_by_game : function (req, res) {
        Score.find({"id_game":req.param('id_game')}).then(function (score) {
            return res.send(score);
        }).catch(function (err) {
            return res.send('500', {message: "Sorry, an error occurd - " + err});
        });
    },
    score_by_player : function(req, res){
        Score.find({"id_player":req.param('id_player')}).then(function (score) {
            return res.send(score);
        }).catch(function (err) {
            return res.send('500', {message: "Sorry, an error occurd - " + err});
        });
    },

    add_score : function(req, res){
        req.body.forEach(function(element) {
            Score.create(element).exec(function (err, score){
                console.log(element);
                if (err) { return res.serverError(err); }
                return res.ok();
            });
        }, this);  
    },
};

