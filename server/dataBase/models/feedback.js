const connection=require("../index.js")
module.exports={
    //function to add feedback
    add:function(callback,etoile,details,id_user,id_serves){
        `INSERT INTO feedback (etoile,details,serves_id_serves,user_id_user) VALUES("${etoile}", "${details}","${id_serves}","${id_user}" )`;   
    connection.query(sql,function(error,results){
        callback(error,results);
    })
    },
};