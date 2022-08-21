module.exports = {
  "type": "object",
  "required": [
      "requestMessage"
  ],
  "properties": {
      "requestMessage": {
          "type": "object",
          "required": [
              "body"
          ],
          "properties": {
              "header": {
                  "type": "object"
              },
              "body": {
                  "type": "object",
                  "required": [
                      "confirmUserRQ"
                  ],
                  "properties": {
                      "confirmUserRQ": {
                          "type": "object",
                          "required": [
                              "mail",
                              "code"
                          ]
                      }
                  }
              }
          }
      }
  }
}