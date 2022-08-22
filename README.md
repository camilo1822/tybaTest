# Descripción:
Aplicación rest con nodeJS, desplegada en AWS. Para la autenticación se decidio usar amazon Cognito, se crearon los siguientes microservicios

# Microservicios:
1. service-user-register (Microservicio para crear usuario)
2. service-user-confirmation (Microservicio para confirmar usuario)
3. service-user-login (Micorservicio para logearse)

#Instrucciones
Se debe probar con un correo real para poder recibir codigo de confirmación:
1. Consumir api de registro, luego de confirmación y por último de login

#Notas
1. Todas las apis validan mensajeria enviada, de no cumplir devuelve error "1F"
2. Cuando la respuesta es exitosa devuelve code "0", de lo contrario "500" con description
3. Postman con servicios https://www.getpostman.com/collections/fc41f13d314b36fd623f

#service-user-register
https://5xpo1abvbl.execute-api.us-east-1.amazonaws.com/develop/service-user-register
```html
{
  "requestMessage": {
    "body": {
      "registerUserRQ": {
        "mail": "camilo1822@gmail.com",
        "password": "camilo123D*"
      }
    }
  }
}
```

#service-user-confirmation
https://5xpo1abvbl.execute-api.us-east-1.amazonaws.com/develop/service-user-confirmation
```html
{
  "requestMessage": {
    "body": {
      "confirmUserRQ": {
        "mail": "camilo1822@gmail.com",
        "code": "994116"
      }
    }
  }
}
```

#service-user-login
https://5xpo1abvbl.execute-api.us-east-1.amazonaws.com/develop/service-user-login
```html
{
  "requestMessage": {
    "body": {
      "loginUserRQ": {
        "mail": "camilo1822@gmail.com",
        "password": "camilo123D*"
      }
    }
  }
}
```
