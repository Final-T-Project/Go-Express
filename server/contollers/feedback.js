const feedback =require("../dataBase/models/feedback.js")

module.exports={
    addFeedback : function(req,res){
        feedback.add(
            function(err,results){
                if(err) res.status(500).send(err)
                else res.json(results)
            },
            req.body.etoile,
            req.body.details,
            req.body.id_serves,
            req.body.id_user
        )
    }
}