'use strict';

/**
 * @function buildResponse
 * @description Construye objeto respuesta
 * @param {string} code Identificador de la respuesta
 * @param {string} description Descripcion de la respuesta
 * @example
 * commonUtil.buildResponse("0", "SUCCESS")
 */
function buildResponse(code, description) {
    let responseMessage = {
        body:{
            registerUserRS:{
                code:code,
                description:description
            }
        }
    }
  return responseMessage;
}

function getOutput (code, desc){
    return { "statusCode": code, "statusDesc": desc }
  }

module.exports = {
    buildResponse,
    getOutput
};
