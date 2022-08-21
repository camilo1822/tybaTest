'use strict'
/**
 * @module tyba-user-login
 * @description lambda para logear usuario con Cognito
 * @author camilo arboleda <camilo1822@gmail.com>
 * @version 1.0.0
 * @since 2022-08-21
 * @lastModified 2022-08-21
 */

const srcHandler = require('./src/handler/handler')

console.log('Loading Function')
exports.handler = async (event, context) => {
  let response = await srcHandler(event, context)
  return response;
}