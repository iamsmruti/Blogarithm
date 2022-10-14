
# Blogarithm - API

This is the Official API for Blogarithm. ( Routes are protected )


## Features

- Authentication with JWT
- Protected Routes


## API Reference
Base Url - https://blogarithm-api.herokuapp.com/

### Authentication Endpoints

#### Register ~

```http
  POST /api/auth/register
```
The Body should contain these parameters.

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | The E-mail goes here. |
| `password` | `string` | The Password goes here. |

The password is stored in hashed format. Hence , even the admins don't know the password.


#### Login ~

```http
  POST /api/auth/login
```
The Body should contain these parameters.

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | The E-mail goes here. |
| `password` | `string` | The Password goes here. |

After sucessfull login , a Token is generated. 

## TOKEN can be of 3 types

- **Normal User** - Only have access to Blogarithm.

- **Author** - Have Access to Blogarithm and Blogarithm CMS, can create and delete own post.

- **Admin** - The Super user can access everything and manage users and posts.

### User Endpoints

#### Get Logged in User's Info ~

```http
  GET /api/users/
```
The Header should contain the TOKEN.

| Key | Value     | Description                |
| :-------- | :------- | :------------------------- |
| `auth-token` | `string` | Here the JWT token is entered. |

This returns the information about the Logged in user using the TOKEN generated after Loggin in.

#### Get all users ~

```http
  GET /api/users/all
```
The Header should contain the TOKEN of ADMIN.

| Key | Value     | Description                |
| :-------- | :------- | :------------------------- |
| `auth-token` | `string` | Here the JWT token is entered. |

This returns the information about all the users.

#### Get a particular user ~

```http
  GET /api/users/:id
```
The Header should contain the TOKEN of ADMIN.

| Key | Value     | Description                |
| :-------- | :------- | :------------------------- |
| `auth-token` | `string` | Here the JWT token is entered. |

This returns the information about a User whose ID is given in the request.

#### Update a particular user ~

```http
  PUT /api/users/:id
```
The Header should contain the TOKEN of ADMIN or the USER itself.

| Key | Value     | Description                |
| :-------- | :------- | :------------------------- |
| `auth-token` | `string` | Here the JWT token is entered. |

This Updates a particular user.

#### Delete a particular user ~

```http
  DELETE /api/users/:id
```
The Header should contain the TOKEN of ADMIN.

| Key | Value     | Description                |
| :-------- | :------- | :------------------------- |
| `auth-token` | `string` | Here the JWT token is entered. |

This deletes a user.

### Post Endpoints

#### Create a New Post ~

```http
  POST /api/posts/
```
The Header should contain the Author TOKEN or Admin TOKEN.

| Key | Value     | Description                |
| :-------- | :------- | :------------------------- |
| `auth-token` | `string` | Here the JWT token is entered. |

This creates a New Post and saves to DataBase.

#### Get all Posts ~

```http
  GET /api/posts/all
```
This is a Public endpoint.

| Key | Value     | Description                |
| :-------- | :------- | :------------------------- |
| `-----` | `-----` | This is a public endpoint doesnt require any TOKEN |

This returns the all the posts.

#### Get a single POST ~

```http
  GET /api/posts/:id
```
This is a Public endpoint.

| Key | Value     | Description                |
| :-------- | :------- | :------------------------- |
| `-----` | `-----` | This is a public endpoint doesnt require any TOKEN |

This returns the a single post.

#### Update a POST ~

```http
  PUT /api/posts/:id
```
The Header should contain the TOKEN of ADMIN or the AUTHOR.

| Key | Value     | Description                |
| :-------- | :------- | :------------------------- |
| `auth-token` | `string` | Here the JWT token is entered. |

This Updates a particular post.

#### Delete a POST ~

```http
  DELETE /api/posts/:id
```
The Header should contain the TOKEN of ADMIN or AUTHOR.

| Key | Value     | Description                |
| :-------- | :------- | :------------------------- |
| `auth-token` | `string` | Here the JWT token is entered. |

This deletes a post.

