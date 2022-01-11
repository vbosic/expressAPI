# Documetation
## Using MongoDB cloud

This project is for learning ExpressAPI and for testing it in React native app

# Endpoints
### Login 

Login feature has 2 endpoints "/signup" and "/signin"

"/signup" request body (POST): 
```json
{
  "email": string,
  "password": string
}
```
"/signin" request body (POST): 
```json
{
  "email": string,
  "password": string
}
```

Response => JWT Token

```json
{
  "token" : "dnakldnasldnlkdnlaksdalkdn"
}
```
Password hashing is also integrated.

### Tracks

Tracks endpoint has 2 enpoints "/tracks"

"/tracks" (GET) -> get tracks by userId, userId is provided from token

"/tracks" (POST): 

```json
{
    "name" : "My new track",
    "locations": [
      {
        "timestamp": 1000000,
        "coords" : {
            "latitude": 100,
            "longitude" : 100,
            "altitude" : 100,
            "accuracy": 100,
            "heading": 100,
            "speed": 100
           }
      }
    ]
}
```
