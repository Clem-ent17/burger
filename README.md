# homework-13

Eat-that-Burger


## Links:

GitHub repository: 
https://github.com/Clem-ent17/burger

Heroku git URL:
https://git.heroku.com/fierce-waters-61441.git

Heroku live URL:
https://fierce-waters-61441.herokuapp.com/


### Overview

I created a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM. 


### Description

* Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

* Your app will store every burger in a database, whether devoured or not.


## Installation:

* Make sure to install the `package.json` by typing `npm install` in your console.


## Technologies:

* This app is deployed on Heroku and use the extension: JAWSDB MySQL to store the data.

* This app use the npm dependencies: Express, Express-handlebars and mySQL


## Directory structure

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

## Project status:

* My current app does not update the data when the buttons are clicked.

* My Heroku live link display a database error

- - -

Clement Valles