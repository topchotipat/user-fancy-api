## Create/Update Preferences

Call:

```
POST    /api/preference
```

Example Request

```
POST    http://localhost:4000/api/preference
```

with header

```
Content-Type: application/json, Authorization: {JWT Token}
```

## POST body format

```javascript
{
	"localization":{
		"language": "English",
		"timeZone": "-1.0",
		"currency":"dollars"
	},
	"privacy":{
		"profileVisibility":"private",
		"messages":"follow"
	},
	"content":{
		"categoryLists": "enable"
	}
}
```

| Name                        | Type   | Description                                          | isRequired |
|-----------------------------|--------|------------------------------------------------------|------------|
| language                    | String | language user                                        | required   |
| timeZone                    | String | timeZone user                                        | required   |
| currency                    | String | currency user                                        | required   |
| profileVisibility           | String | profileVisibility user                               | required   |
| messages                    | String | messages user                                        | required   |
| categoryLists               | String | categoryLists user                                   | required   |

## Response

```javascript
{
    "code": 200,
    "status": "OK"
}
```

## Failures

Example.

```javascript
{
    "code": 401,
    "status": "Unauthorized",
}
```

```javascript
{
    "error": [
        "Category lists is required"
    ],
    "code": 400,
    "status": "Bad Request"
}
```

```javascript
{
    "error": [
        "Messages is invalid"
    ],
    "code": 400,
    "status": "Bad Request"
}
```
