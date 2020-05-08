var express = require('express');
var routing= express.Router();
var busLog=require('../public/javascripts/BL.js');




routing.post('/employee/verify',function(request,response,next){
    var staffId=request.body.staffId;
    var password=request.body.password;
    var result = busLog.loginUser(staffId,password)
    console.log("In router",result);
    return busLog.loginUser(staffId,password)
            .then(function(data){
                console.log(data)
                response.json(data);
            }).catch(function (error){
                if(error.status=404){
                    console.log("In error")
                    response.json(error)
                }else{
                    next(error);
                }
            });
});





routing.post('/signup',function(req,res,next){
    var credentials={
        // "fname":req.body.firstname,
        // "lname":req.body.lastname,
        "staffId":req.body.staffId,
        "password":req.body.password
    }
    var result = busLog.signupUser(credentials)
    if(!result){
        console.log("IN FALSE");
        return res.json(false)
    }
    else{
        return result
            .then(function(item){
                res.json(item);
            }).catch(function (err){
                next(err);
            });
        }
});

routing.get('/books/:type',function(req,res,next){
    var type=req.params.type
    return busLog.getBooks(type)
            .then(function(item){
                res.json(item);
            }).catch(function (err){
                next(err);
            });
})

module.exports=routing;