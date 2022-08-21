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
                      "registerUserRQ"
                  ],
                  "properties": {
                      "registerUserRQ": {
                          "type": "object",
                          "required": [
                              "mail",
                              "password"
                          ]
                      }
                  }
              }
          }
      }
  }
}