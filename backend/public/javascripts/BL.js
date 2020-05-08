var dal = require('./DAL');
var User = require('./User');
var busLog = {};



busLog.loginUser = function (staffId,password) {

    var result = User.userLogin(staffId,password).promise()
    return result.then(data=>{
        if(data.Item){
            console.log(data.Item.staffId)
            user ={
                "staffId" : data.Item.staffId
            }
            return user
        }
        else{
            var err= new Error();
            err.status=404;
            err.message="Login failed!"
            throw err
        }
    })

    // return dal.userLogin(staffId,password)
    //     .then(function (response) {
    //         console.log(response[0].staffId);
    //         user ={
    //             "staffId" : response[0].staffId
    //         }
    //         return user;
    //     })
}



busLog.signupUser = function (credentials) {
    var res =User.signupUser(credentials)
    return res.then(data => {
        console.log("IN BL",data);
        if(data == false){
            return data;
        }
        else{
            return data.promise().then(data=>{
                console.log(data)
                return data
            })
        }
    })

    // return dal.signupUser(credentials)
        // .then(function (item) {
        //     return item;
        // })
}

busLog.getBooks = function(type){
    return dal.getBooks(type)
        .then(function (item) {
            return item;
        })
}

module.exports = busLog;