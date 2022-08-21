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

async function registerUser(json) {
  const {
    mail,
    password
  } = json
  return new Promise((resolve, reject) => {
      let attributeList = []

      attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({
          Name:"email",
          Value: mail
      }));

      const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

      userPool.signUp(mail, password, attributeList, null, function(err, result) {
          if(err) {
            console.log("error signup "+err)
            resolve(commonUtil.getOutput(constant.TECHNICAL_ERROR_CODE,err.name))
          }
          resolve(commonUtil.getOutput(constant.SUCCESS_CODE,constant.SUCCESS_DESCRIPTION))
      })
  })
}

const callService = async (event) => {
  try {
    let response = await registerUser(event.requestMessage.body.registerUserRQ)
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