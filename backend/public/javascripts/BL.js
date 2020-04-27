var dal = require('./DAL');
var busLog = {};



busLog.loginUser = function (empId,password) {
    return dal.userLogin(empId,password)
        .then(function (response) {
            console.log(response[0].staffId);
            user ={
                "staffId" : response[0].staffId
            }
            return user;
        })
}



busLog.signupUser = function (credentials) {
    return dal.signupUser(credentials)
        .then(function (item) {
            return item;
        })
}

busLog.getBooks = function(type){
    return dal.getBooks(type)
        .then(function (item) {
            return item;
        })
}

module.exports = busLog;