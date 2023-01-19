const Employers = require("../dataBase/models/Employer.js")
module.exports = {
    AddEmployer:function(req,res){
        Employers.add(
            function (err,results){
                if (err) res.results(500).send(err);
                else res.json(results);
            },
            req.body.first_name,
            req.body.last_name,
            req.body.adress,
            req.body.gender,
            req.body.photo,
            req.body.phone_number,
            req.body.work_position         
        )
    }
}