## Sign Up user

Call:

```
POST    /api/user/signup
```

Example Request

```
POST    http://localhost:4000/api/user/signup
```

with header

```
Content-Type: application/json
```

## POST body format

```javascript
{
	"email":"topz.classic20@gmail.com",
	"password": "Cho123456"
}
```

| Name                        | Type   | Description                                          | isRequired |
|-----------------------------|--------|------------------------------------------------------|------------|
| email                       | String | email user signup                                    | required   |
| password                    | String | password user signup                                 | required   |

## Response

```javascript
{
    "data": {
        "email": "topz.classic20@gmail.com",
        "password": "$2b$10$yeIbeGYatQVCcusYsobaou3vtJNqQhk7Fz8AHZ0kdZ3f53/oUhLHW",
        "signup_time": 1531727642895
    },
    "code": 200,
    "status": "OK"
}
```

## Failures

```javascript
{
    "error": "Email not found",
    "code": 404,
    "status": "Not Found"
}
```

```javascript
{
    "error": [
        "Email is required",
        "Password is required"
    ],
    "code": 400,
    "status": "Bad Request"
}
```
