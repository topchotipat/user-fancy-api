## Get Preferences

Call:

```
GET     /api/preference
```

Example Request

```
GET     http://localhost:4000/api/preference

```

with header

```
Content-Type: application/json, Authorization: {JWT Token}
```


## Example Success Response
 
```javascript

{
    "data": {
        "localization": {
            "language": "Portuguese",
            "timeZone": "-5.0",
            "currency": "cent"
        },
        "privacy": {
            "profileVisibility": "everyone",
            "messages": "everyone"
        },
        "content": {
            "categoryLists": "disable"
        }
    },
    "code": 200,
    "status": "OK"
}

```

## Example Failure Response

```javascript
{
  "code": 404,
  "status": "Internal Server Error",
  "errors": List["Category is not correct"]
}

```

```javascript
{
  "code": 401,
  "status": "Unauthorized",
  "errors": List["Authentication has failed"]
}
```