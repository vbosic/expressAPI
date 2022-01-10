# Documetation
## Using MongoDB cloud

This project is for learning ExpressAPI and for testing it in React native app

# Endpoints
### Login 

Login feature has 2 endpoints "/signup" and "/signin"

"/signup" request body: 
```json
{
  "email": string,
  "password": string
}
```
"/signin" request body: 
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
