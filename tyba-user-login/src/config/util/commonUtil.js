'use strict';

/**
 * @function buildResponse
 * @description Construye objeto respuesta
 * @param {string} code Identificador de la respuesta
 * @param {string} description Descripcion de la respuesta
 * @example
 * commonUtil.buildResponse("0", "SUCCESS")
 */
function buildResponse(code, description,token) {
    let responseMessage = {
        body:{
            loginUserRS:{
                code:code,
                description:description,
                token:token
            }
        }
    }
  return responseMessage;
}

function getOutput (code, desc){
    return { "statusCode": code, "statusDesc": desc }
}

function getOutputSuccess (code, desc, token){
    return { "statusCode": code, "statusDesc": desc, "token":token }
}

module.exports = {
    buildResponse,
    getOutput,
    getOutputSuccess
};
