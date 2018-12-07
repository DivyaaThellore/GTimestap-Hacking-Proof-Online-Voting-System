var Cryptr = require('cryptr');
cryptr = new Cryptr('myTotalySecretKey');
 
var connection = require('./../public/javascripts/config');
var routes = require('./../routes/routes');

module.exports.authenticate=function(req,res){
    var email=req.body.email;
    var password=req.body.password;
    console.log("***********");
    console.log(email + " " + password);
   
    connection.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
      }else{
       
        if(results.length >0){
            decryptedString = cryptr.decrypt(results[0].password);
            if(password==decryptedString){
              if(email=="admin@gmail.com") {
                res.redirect("src/admin.html");
              }
              else {
                // res.json({
                //     status:true,
                //     message:'successfully authenticated'
                // })
                res.redirect('votingpage.html');
              }
            }else{
                res.json({
                  status:false,
                  message:"Email and password does not match"
                 });
            }
          
        }
        else{
          res.json({
              status:false,    
            message:"Email does not exits"
          });
        }
      }
    });
}
