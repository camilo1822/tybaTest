const validateSchema = require('../config/schema/validateSchema')
const processBusiness = require('../business/business')
const commonUtil = require('../config/util/commonUtil')
const constant = require('../config/util/constant')

module.exports = async function defaultHandler (event, context) {
  console.log('Evento de  entrada ', JSON.stringify(event))
  try {
    await validateSchema(event)
    const response = await processBusiness.callService(event)
    console.log("response "+JSON.stringify(response))
    return commonUtil.buildResponse(response.statusCode,response.statusDesc);
  } catch (error) {
    return commonUtil.buildResponse(error.statusCode,error.statusDesc);
  }
}
