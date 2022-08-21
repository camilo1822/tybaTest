const AWS = require('aws-sdk');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const commonUtil = require('../config/util/commonUtil')
const constant = require('../config/util/constant')

const UserPoolId = "us-east-1_promC4QMy"
const ClientId = "36740mt4cog6bbde1bi7uoi7qs"

const poolData = {
  UserPoolId,
  ClientId
}

AWS.config.update({
  region: 'us-east-1'
})

async function confirmUser(json) {
  const {
    mail,
    code
  } = json
//Confirmamos usuario
return new Promise((resolve, reject) => {
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
var userData = {
  Username : mail,
  Pool : userPool
};
var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
cognitoUser.confirmRegistration(code, true, function(err, result) {
  if (err) {
    console.log("error confirmando "+err)
    resolve(commonUtil.getOutput(constant.TECHNICAL_ERROR_CODE,err.name))
  }
resolve(commonUtil.getOutput(constant.SUCCESS_CODE,constant.SUCCESS_DESCRIPTION))
});
});
}

const callService = async (event) => {
  try {
    response = await confirmUser(event.requestMessage.body.confirmUserRQ)
    console.log("response call "+JSON.stringify(response))
    return response
  } catch (error) {
    console.log("error "+error)
    return error
  }
}

module.exports = {
  callService
}