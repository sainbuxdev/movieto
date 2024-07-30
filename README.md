##### Description

Get total no of movies and no of pages to show to show all movies

##### URL

https://movieto-api.vercel.app/movie/count

##### Method

GET

##### Example

```javascript
const promise = fetch("https://movieto-api.vercel.app/movie/count", {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
});
```

##### Response

###### Success

- Status: 200
- Status Text: OK
- Result Object after parsing json:
  ```javascript
  {
      data: {
      count: 180,
      totalPages: 9
      }
  }
  ```

### Random Movie

##### Description

Get a random movie

##### URL

https://movieto-api.vercel.app/movie

##### Method

GET

##### Example

```javascript
const promise = fetch("https://movieto-api.vercel.app/movie", {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
});
```

##### Response

###### Success

- Status: 200
- Status Text: OK
- Result Object after parsing json:

```javascript
{
    id: 22,
    name: "Venom: Let There Be Carnage",
    img_url: "https://www.themoviedb.org/t/p/w220_and_h330_face/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
    url: https:"//www.themoviedb.org/movie/580489",
    launch_date: "2021-09-30",
    rating: 84,
    createdAt: "2021-12-18T08:38:13.000Z",
    updatedAt: "2021-12-18T08:38:13.000Z"
}
```

### All Movies of specific page

##### Description

Get 20 movies by specifying a page no.

##### URL

https://movieto-api.vercel.app/movie/all?page=pageNo

##### Method

GET

##### Example

```javascript
const promise = fetch("https://movieto-api.vercel.app/movie/all?page=1", {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
});
```

###### Response

###### Success

- Status: 200
- Status Text: OK
- Result Object after parsing json: Array of 20 object

### Signup

##### Description

Sign up to make an account. Make sure field data should be stored in following variables

full_name, user_name, email, password

##### URL

https://movieto-api.vercel.app/user/signup

##### Method

POST

##### Example

```javascript
    const promise = fetch("https://movieto-api.vercel.app/user/signup", {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            Accept:"application/json"
        },
        body:JSON.stringify(
            {
                user_name:"tammy",
                full_name:"Tammy",
                email:"tammy@gmail.com",
                password:"Tammy786@%$"
            }
        );
    })
```

###### Success

- Status: 201
- Status Text: CREATED
- Result Object after parsing json:

```javascript
{
  message: "New User Created Succesfully";
}
```

###### Failure

- Status: 400
- Status Text: Bad Request
- Result Object after parsing json:

```javascript
{
  message: "Username already exists";
}
```

### Login

##### URL

https://movieto-api.vercel.app/user/login

##### Method

POST

if you want to login with username and password

```javascript
    const promise = fetch("https://movieto-api.vercel.app/user/login", {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            Accept:"application/json"
        },
        body:JSON.stringify(
            {
            user_name: "jonas",
            password:"Jonas786@%$"
            }
        );
    })
```

###### Success

- Status: 200
- Status Text: OK
- Result Object after parsing json:

```javascript
{
    message: "Login Succesful",
    data: {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTUsInVzZXJfbmFtZSI6ImpvbmFzIiwiaWF0IjoxNjkwODA3MDY0LCJleHAiOjE2OTA4OTM0NjR9.5MRl7YeCn1n60TrDJLs2cTUGyBfw1hK29Egb3dlV76Y"
    }
}
```

if you want to login using token

```javascript
    const promise = fetch("https://movieto-api.vercel.app/user/login", {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            Accept:"application/json"
        },
        body:JSON.stringify(
            {
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.       eyJpZCI6NTUsInVzZXJfbmFtZSI6ImpvbmFzIiwiaWF0IjoxNjkwODA3MDY0LCJleHAiOjE2OTA4OTM0NjR9.5MRl7YeCn1n60TrDJLs2cTUGyBfw1hK29Egb3dlV76Z"
            }
        );
    })
```

###### Success

- Status: 200
- Status Text: OK
- Result Object after parsing json:

```javascript
{
    message: "Token Autheticated, Access Granted",
    data: {
        user_name: "jonas",
        full_name: "Jonas",
        email: "jonas@gmail.com"
    }
}
```

###### Failure

- Status: 400
- Status Text: Bad Request
- Result Object after parsing json:

```javascript
{
  message: "Username already exists";
}
```

### Update

##### URL

https://movieto-api.vercel.app/user/update

##### Method

POST

##### Example

```javascript
    const promise = fetch("https://movieto-api.vercel.app/user/update", {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            Accept:"application/json"
        },
        body:JSON.stringify(
             {
                user_name: "jinas",
                token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTUsInVzZXJfbmFtZSI6ImpvbmFzIiwiaWF0IjoxNjkwODA4NDE5LCJleHAiOjE2OTA4OTQ4MTl9.Xv-dYCQ6TbjOzcWAqL04rXqaht6MDS5D0FmvLm6rKMQ"
            }
    })
```

###### Success

- Status: 201
- Status Text: Created
- Result Object after parsing json:

```javascript
{
    "message": "Update Succesful"
}
```

### Delete

##### URL

https://movieto-api.vercel.app/user/delete

##### Method

POST

##### Example

```javascript
    const promise = fetch("https://movieto-api.vercel.app/user/delete", {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            Accept:"application/json"
        },
        body:JSON.stringify(
             {
                token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTUsInVzZXJfbmFtZSI6ImpvbmFzIiwiaWF0IjoxNjkwODA4NDE5LCJleHAiOjE2OTA4OTQ4MTl9.Xv-dYCQ6TbjOzcWAqL04rXqaht6MDS5D0FmvLm6rKMQ"
            }
    })
```

###### Success

- Status: 201
- Status Text: Created
- Result Object after parsing json:

```javascript
{
  message: "User deleted Succesfully";
}
```

### Watchlist

##### URL

https://movieto-api.vercel.app/watchlist

##### Method

POST

```javascript
    const promise = fetch("https://movieto-api.vercel.app/watchlist", {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            Accept:"application/json"
        },
        body:JSON.stringify(
            {
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.       eyJpZCI6NTUsInVzZXJfbmFtZSI6ImpvbmFzIiwiaWF0IjoxNjkwODA3MDY0LCJleHAiOjE2OTA4OTM0NjR9.5MRl7YeCn1n60TrDJLs2cTUGyBfw1hK29Egb3dlV76Z"
            }
        );
    })
```

###### Success

- Status: 200
- Status Text: OK
- Result Object after parsing json:

```javascript
[{}, {}, {}];
```

### Add to Watchlist

##### URL

https://movieto-api.vercel.app/watchlist/add

##### Method

POST

##### Example

```javascript
    const promise = fetch("https://movieto-api.vercel.app/watchlist/add", {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            Accept:"application/json"
        },
        body:JSON.stringify(
            {
                movie_id: 2,
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.       eyJpZCI6NTUsInVzZXJfbmFtZSI6ImpvbmFzIiwiaWF0IjoxNjkwODA3MDY0LCJleHAiOjE2OTA4OTM0NjR9.5MRl7YeCn1n60TrDJLs2cTUGyBfw1hK29Egb3dlV76Z"
            }
        );
    })
```

###### Success

- Status: 201
- Status Text: Created
- Result Object after parsing json:

```javascript
{
  message: "Movie Succesfully Added To WatchList";
}
```

### Remove from Watchlist

##### URL

https://movieto-api.vercel.app/watchlist/remove

##### Method

POST

##### Example

```javascript
    const promise = fetch("https://movieto-api.vercel.app/watchlist/remove", {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            Accept:"application/json"
        },
        body:JSON.stringify(
            {
                movie_id: 2,
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.       eyJpZCI6NTUsInVzZXJfbmFtZSI6ImpvbmFzIiwiaWF0IjoxNjkwODA3MDY0LCJleHAiOjE2OTA4OTM0NjR9.5MRl7YeCn1n60TrDJLs2cTUGyBfw1hK29Egb3dlV76Z"
            }
        );
    })
```

###### Success

- Status: 201
- Status Text: Created
- Result Object after parsing json:

```javascript
{
  message: "Movie Succesfully Added To WatchList";
}
```
