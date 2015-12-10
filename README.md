## MEAN Stack Starter Kit

I am working my way through learning MEAN Stack and coming from a Rails background, thought it made sense to create a base starting point for launching
new projects. This is a work in progress!!!

## Code Example

The starterkit assumes you will be using Angular to handle all routes from the front end, with backend routes (/api) through node.

## Installation

```sh
$ npm install -g bower
``` 
This will install bower globally to help with all of the angular dependencies.

Within the `.bowerrc` file, we point the dependencies to be installed in the `public/lib` directory (Change to match your project, if needed/wanted). 
Additionally, within `bower.json`, we specify which dependencies are to be installed (Change to match your project). 

```sh
$ npm install
```
Install all of the node modules needed.

```sh
$ eslint --init
```
Let's install eslint (`http://eslint.org/`) to help maintain code quality standards.

`config/env.js` will hold the connection url for the mongodb instance. If you are running locally, nothing to change here but the name of the db to be used.

If running mongo locally, ensure it's running before starting the server!

Starting the server, 
```sh
$ npm start
```
from the root of the project in a terminal, or if you are using nodemon (`https://www.npmjs.com/package/nodemon`)
```sh
$ nodemon
```

## API Reference

The initial api endpoint is `/api`.

| Routes   	          | HTTP Verb | Description  	            |
|---	              |---	      |---	                        |
| /api/users  	      | GET  	  | Get all the users  	        |
| /api/users  	      | POST  	  | Create a new user           |
| /api/users/:user_id | GET       | Get a single user  	        |
| /api/users/:user_id | PUT       | Update a user with new info |
| /api/users/:user_id | DELETE    | Delete a user           	|


## Goals
 - Testing, Testing, Testing
 - CRUD for User model
 - Front end templates to handle CRUD
 - JSON Web Token authentication for routes
 - User Login system

License
----

MIT

**Free Software, Hell Yeah!**
