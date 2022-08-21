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

async function loginUser(json) {
  const {
    mail,
    password
  } = json
  var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
    Username : mail,
    Password : password,
  });
  const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
  var userData = {
    Username : mail,
    Pool : userPool
  };
  var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
  return new Promise((success, error) => {
  cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: async function (result) {
          //console.log('access token + ' + result.getAccessToken().getJwtToken());
          //console.log('id token + ' + result.getIdToken().getJwtToken());
          //console.log('refresh token + ' + result.getRefreshToken().getToken());
          console.log("success")
          success(commonUtil.getOutputSuccess(constant.SUCCESS_CODE,constant.SUCCESS_DESCRIPTION,result.getAccessToken().getJwtToken()))
      },
      onFailure: async function(err) {
        console.log("fail "+err)
        success(commonUtil.getOutput(constant.TECHNICAL_ERROR_CODE,err.name))
      }
  });
});
}

const callService = async (event) => {
  try {
    let response = await loginUser(event.requestMessage.body.loginUserRQ)
    return response
  } catch (error) {
    console.log("error "+error)
    return error
  }
}

module.exports = {
  callService
}