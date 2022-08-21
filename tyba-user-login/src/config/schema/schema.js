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
                      "loginUserRQ"
                  ],
                  "properties": {
                      "loginUserRQ": {
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