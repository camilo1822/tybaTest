const commonUtil = require('../util/commonUtil')
const constant = require('../util/constant')
const Validator = require('jsonschema').Validator

const schema = require('./schema')

module.exports = async (event) => {
  const validator = new Validator()
  const validatorResponse = validator.validate(event, schema).errors
  if (validatorResponse.length > 0) {
    console.log('Error validatorSchema -> ', validatorResponse)
    throw commonUtil.getOutput(constant.BAD_PARAMS_CODE,constant.BAD_PARAMS_DESCRIPTION)
  }
}
