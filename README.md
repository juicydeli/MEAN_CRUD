# Simple-mean CRUD
A barebones CRUD app implemented with the full MEAN stack. Meant to be a starting point and reference for beginners.
Express-node-mongo-skeleton was made to have a simple skeleton for a completed Web App ready to go for demonstration purposes and learning how to build CRUD & REST operations into a Node.js Web App.

## Prerequisites
Make sure you have installed all of the following prerequisites on your development machine: MEAN stack packages.
-NodeJS.
-Amgular 1.5.
-MongoDB.

## Installation
-Create a MongoDB database named `mean-db` (`use mean-db`)
-Install packages and start the express.js web service
-Navigate to `http://127.0.0.1:3000` to see the express.js welcome page

## Usage Instructions
All of the MVC pieces are built, but are also rudimentary and not flashy. The root of our webapp goes to the express.js landing page, but there is a schema created for a new object called `blobs`. To access `blobs`, follow the route that is already in place by going to `http://127.0.0.1:3000/blobs`.

Add a new blob by going to `http://127.0.0.1:3000/blobs/new`. 

All of the REST pieces are baked in as well. You can test them using a multitude of different REST based tools.


## Application Development Process:
Step 1: Create application structure.

  <Project root> /
    
    / server
    <model>
      db.js
      blobs.js
    <node_modules>
      ...
    <bin>
      ...
    <routes>
      blob.js
      
    app.js - Server entry-point.
    
    <client> FE (AngularJS base)
      <css>
        bootstrap.min.css
        style.css - Custome FE stylesheet modification
      <fonts>
      <images>
      <js>
        <jQuery>
          jquery.min
        angular-gravatar.js
        angular-md5.js
        angular-script.js
        bootstrap.min.js
        ng-infinite-scroll.min.js
      <lib>
        <angular>
          angular.min.js
      <templates>
        form.html
      index.html

Step 2: Setting up the database.
Create a database name “mean-db“.

Step 3: Connecting to MongoDB database.
Under /mode/db.js define your connection setting

We use 'Mongoose' 
Why use Mongoose ? mongoose is an object modeling package for Node that essentially works like an ORM & Mongoose allows us to have access to the MongoDB commands for CRUD simply and easily.

var mongoose = require('mongoose');
mongoose.connect('mongodb://<user>:<password>@<url>:port/mean-db');


## Contribution
Create a fork of the project into your own reposity. Make all your necessary changes and create a pull request with a description on what was added or removed and details explaining the changes in lines of code. If approved, project owners will merge it.

Licensing
---------
MEAN_CRUD is freely distributed under the MIT License. See LICENSE for details
