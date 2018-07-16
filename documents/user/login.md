## Login user

Call:

```
POST    /api/user/login
```

Example Request

```
POST    http://localhost:4000/api/user/login
```

with header

```
Content-Type: application/json
```

## POST body format

```javascript
{
	"email":"topz.classic@gmail.com",
	"password": "Cho123456"
}
```

| Name                        | Type   | Description                                          | isRequired |
|-----------------------------|--------|------------------------------------------------------|------------|
| email                       | String | email user from signup                               | required   |
| password                    | String | password user from signup                            | required   |

## Response

```javascript
{
    "data": {
        "email": "topz.classic@gmail.com",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViNDkxY2JiNzAzMDZlNzJjMDcwZTBkMyIsImVtYWlsIjoidG9wei5jbGFzc2ljQGdtYWlsLmNvbSIsImlhdCI6MTUzMTcyNjE2NywiZXhwIjoxNTMxNzI3OTY3fQ.Qp7bl7G5HxnG64cKeZ1iby-ln7kQx2MYVfiSCvlKyAg",
        "logged_in_at": 1531725736391
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
        "Password is required"
    ],
    "code": 400,
    "status": "Bad Request"
}
```
