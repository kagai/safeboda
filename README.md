<h1>
  SafeBoda API
</h1>




###### An API made with

<p>
  <img src="https://cdn.svgporn.com/logos/typescript-icon.svg" alt="typescript" width="30" height="30"/>
  <img src="https://img.icons8.com/color/452/mongodb.png" alt="mongodb" width="35" height="35"/>
  <img src="https://cdn.svgporn.com/logos/nodejs-icon.svg" alt="nodejs" width="30" height="30"/>

  <img src="https://cdn.svgporn.com/logos/eslint.svg" alt="eslint" width="30" height="30"/>
  <img src="https://cdn.svgporn.com/logos/jest.svg" alt="jest" height="30">
  
</p>


## Building

You'll need [Node.js](https://nodejs.org), [Mongodb](https://www.mongodb.com/) and i recommend that you have installed 

###### Cloning Repository

```cloning
git clone the repo , the cd into it , then run :
yarn install || npm install
```

###### Running API (development environment)

```development
yarn dev || npm run dev
```

###### Generating Build and running build

```build
yarn build && yarn start || npm run build && npm run start
```


###### Tests (jest) 

- _**All**_ ❯ `npm run test`
- _**Coverage**_ ❯ `npm run test:ci`
- _**Watch**_ ❯ `yarn test:watch`


###### Lint (eslint) 

- _**Lint**(fix)_ ❯ `npm run lint`

# API
 ** `access-token` ** should be added to all headers for authorization
## Signup
**You send:**  Your  login credentials.
**You get:** An `access-token` with wich you can make further actions.

**Request:**
```json
POST /api/signup HTTP/1.1
Accept: application/json
Content-Type: application/json

{
 "name": "any_name",
  "email": "any@time.com",
  "password": "any_password",
  "passwordConfirmation": "any_password"
}
```
**Successful Response:**
```json
HTTP/1.1 200 OK
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNGIxZThiN2EzYTZkMzMzZWZmYjMzMSIsImlhdCI6MTYzMjMxMjk3MX0.yKtoKIlO5cKLaAtESC138bdhw_ROV-qWtCcpqXaI9sk",
    "name": "any_name"
}
```

## Login

**Request:**
```json
POST api/login HTTP/1.1
Accept: application/json
Content-Type: application/json

{
    "email":"any@mail.com",
    "password":"any_password"
}
```
**Successful Response:**
```json
HTTP/1.1 200 OK
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDQ3NzEwYjJkODcxZDcyZTJjYjIwOCIsImlhdCI6MTYzMjMzMzE0M30.YIcleb9enA1UIGzx5atnsnBAksz7i-_0rLXaohFs6Ks",
    "name": "any_name"
}
```

## driver
**You send:**  `access-token` in headers and name and phoneNumber in body
**You get:** 

**Request:**
```json
POST /api/driver HTTP/1.1
Accept: application/json
Content-Type: application/json

{
    "name":"test-driver",
    "phoneNumber":"2547000000"
}
```
**Successful Response:**
```json
HTTP/1.1 200 OK
{
    "name": "test-driver",
    "phoneNumber": "2547000000",
    "suspended": false,
    "id": "614b6b834e3e1340ea7aaba5"
}
```


**Request:**
```json
DELETE /api/driver/<driverId>/suspend HTTP/1.1
Accept: application/json
Content-Type: application/json

{
}
```
**Successful Response:**
```json
HTTP/1.1 204 OK
{
}
```
**Request:**
```json
POST /api/driver/<driverId>/suspend HTTP/1.1
Accept: application/json
Content-Type: application/json

{
}
```
**Successful Response:**
```json
HTTP/1.1 204 OK
{
}
```

## Passanger

**Request:**
```json
POST /api/passanger HTTP/1.1
Accept: application/json
Content-Type: application/json

{
    "name":"test-passanger",
    "phoneNumber":"2547000000"
}
```
**Successful Response:**
```json
HTTP/1.1 200 OK
{
    "name": "test-passanger",
    "phoneNumber": "2547000000",
    "id": "614af4b3d0877b227a98e7ce"
}
```

## Ride

**Request:**
```json
POST /api/ride/<passangerId>/<driverId> HTTP/1.1
Accept: application/json
Content-Type: application/json
{
    "pickUpPoint":[70.01,-75.02],
    "destinationPoint": [70.9999, 80.11111]
}
```
**Successful Response:**
```json
HTTP/1.1 200 OK
{
    "passangerId": "614ad01ce545f416e45dcf02",
    "driverId": "614ad01ce545f416e45dcf02",
    "pickUpPoint": [
        70.01,
        -75.02
    ],
    "destinationPoint": [
        70.9999,
        80.11111
    ],
    "rideStatus": "ongoing",
    "id": "614b702e8107d841e652b4a1"
}
```


**Request:**
```json
DELETE /api/ride/<rideId>/stop HTTP/1.1
Accept: application/json
Content-Type: application/json
{
}
```
**Successful Response:**
```json
HTTP/1.1 200 OK
{
    "passangerId": "61449e1b32730ae1314cf822",
    "driverId": "61449e1b32730ae1314cf823",
    "pickUpPoint": [
        70.01,
        -75.02
    ],
    "destinationPoint": [
        70.9999,
        80.11111
    ],
    "rideStatus": "done",
    "id": "614acf1356aaba16daa2de71"
}
```

**Request:**
```json
GET /api/ride/ongoing HTTP/1.1
Accept: application/json
Content-Type: application/json

```
**Successful Response:**
```json
HTTP/1.1 200 OK
[
    {
        "_id": "6149c555779fd81f1cc4081a",
        "passangerId": "61449e1b32730ae1314cf822",
        "driverId": "61449e1b32730ae1314cf822",
        "pickUpPoint": null,
        "destinationPoint": null,
        "rideStatus": "ongoing"
    },
    {
        "_id": "6149eab84ac481261ed8c5c5",
        "passangerId": "61449e1b32730ae1314cf822",
        "driverId": "61449e1b32730ae1314cf822",
        "pickUpPoint": null,
        "destinationPoint": null,
        "rideStatus": "ongoing"
    },
    {
        "_id": "614a077a506f2c28d56c775a",
        "passangerId": "61449e1b32730ae1314cf822",
        "driverId": "61449e1b32730ae1314cf822",
        "pickUpPoint": null,
        "destinationPoint": null,
        "rideStatus": "ongoing"
    },
    {
        "_id": "614a07c3506f2c28d56c775b",
        "passangerId": "61449e1b32730ae1314cf822",
        "driverId": "61449e1b32730ae1314cf822",
        "pickUpPoint": [
            70,
            -75
        ],
        "destinationPoint": null,
        "rideStatus": "ongoing"
    },
    {
        "_id": "614a07d56b4d3228e2d67ec6",
        "passangerId": "61449e1b32730ae1314cf822",
        "driverId": "61449e1b32730ae1314cf822",
        "pickUpPoint": [
            70,
            -75
        ],
        "destinationPoint": null,
        "rideStatus": "ongoing"
    },
    {
        "_id": "614a07eb6b4d3228e2d67ec7",
        "passangerId": "61449e1b32730ae1314cf822",
        "driverId": "61449e1b32730ae1314cf822",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": null,
        "rideStatus": "ongoing"
    },
    {
        "_id": "614a21dbc4d24b2aee289199",
        "passangerId": "61449e1b32730ae1314cf822",
        "driverId": "61449e1b32730ae1314cf822",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614a23e44c61bf2b75e23bfc",
        "passangerId": "61449e1b32730ae1314cf822",
        "driverId": "61449e1b32730ae1314cf822",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614a24354c61bf2b75e23bfd",
        "passangerId": "61449e1b32730ae1314cf822",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614a95f1bf12350e4032cec0",
        "passangerId": "61449e1b32730ae1314cf822",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614a967f4e4b5f0e790c6952",
        "passangerId": "61449e1b32730ae1314cf822",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614a96a34e4b5f0e790c6953",
        "passangerId": "61449e1b32730ae1314cf822",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614a96a44e4b5f0e790c6954",
        "passangerId": "61449e1b32730ae1314cf822",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614a9b69b5e42510039f832e",
        "passangerId": "61449e1b32730ae1314cf822",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614a9b87b5e42510039f832f",
        "passangerId": "61449e1b32730ae1314cf822",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614a9bbda430d61020e4644a",
        "passangerId": "61449e1b32730ae1314cf822",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614a9cbb13e85d104fa5e784",
        "passangerId": "61449e1b32730ae1314cf822",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614a9ccccb45e8105bbd6146",
        "passangerId": "61449e1b32730ae1314cf822",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614a9e4452914f109cfe3c0e",
        "passangerId": "61449e1b32730ae1314cf822",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614aa03d5a1c69110952e5b2",
        "passangerId": "61449e1b32730ae1314cf822",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614acd531ec66f164a0405a2",
        "passangerId": "61449e1b32730ae1314cf822",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614acd652939211654dae768",
        "passangerId": "61449e1b32730ae1314cf822",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614acd9d00f8b616647b5ada",
        "passangerId": "61449e1b32730ae1314cf822",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614acdb86e76be166d696d26",
        "passangerId": "61449e1b32730ae1314cf822",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614acde4d3bce51687e90020",
        "passangerId": "61449e1b32730ae1314cf822",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614acef940d26d16c94cdbbd",
        "passangerId": "61449e1b32730ae1314cf822",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614acf4be545f416e45dcf01",
        "passangerId": "61449e1b32730ae1314cf822",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614ad01ce545f416e45dcf02",
        "passangerId": "61449e1b32730ae1314cf823",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614ad043ae38481713d066ec",
        "passangerId": "61449e1b32730ae1314cf823",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614ad0ca1faa52171d90cb6d",
        "passangerId": "61449e1b32730ae1314cf823",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614ad0dedf452317348fa38f",
        "passangerId": "61449e1b32730ae1314cf823",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614ad12ed1ca1a1745dfca74",
        "passangerId": "61449e1b32730ae1314cf823",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614ad1493594b117517f6375",
        "passangerId": "61449e1b32730ae1314cf823",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614ad1e5509dbe1782419e23",
        "passangerId": "61449e1b32730ae1314cf823",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614ad20e658eea178a30eb67",
        "passangerId": "61449e1b32730ae1314cf823",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614ad4987efa1517d48c79ed",
        "passangerId": "61449e1b32730ae1314cf823",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614ad4997efa1517d48c79ee",
        "passangerId": "61449e1b32730ae1314cf823",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614ad5ef7efa1517d48c79ef",
        "passangerId": "61449e1b32730ae1314cf823",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614ad6024499fa1827caaf38",
        "passangerId": "61449e1b32730ae1314cf823",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614ad620b5ae2c1831d11b7b",
        "passangerId": "61449e1b32730ae1314cf823",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614ad683a1b651184730ed2f",
        "passangerId": "61449e1b32730ae1314cf823",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614ad6dfc4c6b8185c4c95e4",
        "passangerId": "61449e1b32730ae1314cf823",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614ad7c8c6daca18882ce561",
        "passangerId": "61449e1b32730ae1314cf823",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614ad7e4694bbe1891e0aaf7",
        "passangerId": "61449e1b32730ae1314cf823",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614adb91fdfa8d18f54ab1c1",
        "passangerId": "61449e1b32730ae1314cf823",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614adbb50f8be418ffaf27e7",
        "passangerId": "61449e1b32730ae1314cf823",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614adc6f65084b192921fb73",
        "passangerId": "61449e1b32730ae1314cf823",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614adca6dcea9e19337f34c4",
        "passangerId": "61449e1b32730ae1314cf823",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614adcd50e8e7c1940340a89",
        "passangerId": "61449e1b32730ae1314cf823",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614adcf0c290991958ce7378",
        "passangerId": "61449e1b32730ae1314cf823",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614add22c182da1972aac840",
        "passangerId": "61449e1b32730ae1314cf823",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614add30c182da1972aac841",
        "passangerId": "614a24354c61bf2b75e23bfd",
        "driverId": "614a24354c61bf2b75e23bfd",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614add5606959d1983f243f5",
        "passangerId": "614a24354c61bf2b75e23bfd",
        "driverId": "614a24354c61bf2b75e23bfd",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614add6a06959d1983f243f6",
        "passangerId": "61449e1b32730ae1314cf823",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614add9252369c1994d20552",
        "passangerId": "61449e1b32730ae1314cf823",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614adfb0bc495319cb35fb2d",
        "passangerId": "61449e1b32730ae1314cf823",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614adfcb837d3719d6d1b380",
        "passangerId": "61449e1b32730ae1314cf823",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614adfef9c276419dca061a0",
        "passangerId": "61449e1b32730ae1314cf823",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614ae0028efe5c19e574ee79",
        "passangerId": "61449e1b32730ae1314cf823",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614ae01da67e5d19eb10143f",
        "passangerId": "61449e1b32730ae1314cf823",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614ae071487e3f1a0788f731",
        "passangerId": "61449e1b32730ae1314cf823",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614ae094c477f71a0fa2f252",
        "passangerId": "61449e1b32730ae1314cf823",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614ae5d19eeac21bf874ad05",
        "passangerId": "61449e1b32730ae1314cf823",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    },
    {
        "_id": "614ae6a81e24411c688e7589",
        "passangerId": "61449e1b32730ae1314cf823",
        "driverId": "61449e1b32730ae1314cf823",
        "pickUpPoint": [
            70.01,
            -75.02
        ],
        "destinationPoint": [
            70.9999,
            80.11111
        ],
        "rideStatus": "ongoing"
    }
]
```

### Improvements 
- Increase code coverage 
- Finish docker set up for easy of running.
- Make phoneNumber unique


### Assumptions 
- We use only MongoDB ObjectId as our identifier. 