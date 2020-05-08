const AWS = require('aws-sdk');

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000"
});

var db = new AWS.DynamoDB();
var docClient = new AWS.DynamoDB.DocumentClient();

const table = "Users";

var User = {};

User.userLogin = function (staffId, password) {
  var params = {
    TableName: table,
    Key:{
        "staffId": staffId,
        "password": password
    }
  };

  return docClient.get(params,function (err, data) {
    if (err) {
      console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
    }
    else {
      console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
    }
  });
}

User.getUserById = function (staffId){
  var params = {
    TableName:table,
    Key:{
      "staffId":{
        "S":staffId
      }
    },
    "ProjectionExpression":"staffId,password",
    "ConsistentRead": true,
    "ReturnConsumedCapacity": "TOTAL"
  };
  return db.getItem(params,function (err, data) {
    if (err) {
      console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
    }
    else {
      console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
    }
  });
}

User.signupUser = function (credentials) {

  var result = User.getUserById(credentials.staffId).promise()

  return result.then(data => {
    console.log("Data",data);
    if(data.Item){
      return false
    }
    else{
      var params = {
        TableName:table,
        Item:{
          "staffId": credentials.staffId,
          "password": credentials.password
        }
      };
      return docClient.put(params, function(err, data) {
        if (err) {
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("Added item:", JSON.stringify(data, null, 2));
        }
      })
    }
  });
  // if(res == true){
  //   var params = {
  //     TableName:table,
  //     Item:{
  //       "staffId": credentials.staffId,
  //       "password": credentials.password
  //     }
  //   };
  //   return docClient.put(params, function(err, data) {
  //     if (err) {
  //         console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
  //     } else {
  //         console.log("Added item:", JSON.stringify(data, null, 2));
  //     }
  //   })
  // }
  // else{
  //   return false
  // }
}

module.exports = User;