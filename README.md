# Simple-mean CRUD
A barebones CRUD app implemented with the full MEAN stack. Meant to be a starting point and reference for beginners.
Express-node-mongo-skeleton was made to have a simple skeleton for a completed Web App ready to go for demonstration purposes and learning how to build CRUD & REST operations into a Node.js Web App.

## Prerequisites
Make sure you have installed all of the following prerequisites on your development machine: MEAN stack packages.
-NodeJS.
-Amgular 1.5.
-MongoDB.
 Generate the Express.js Skeleton - Within Node.js, the standard for creating web apps is Express.js. Express even has a   template generator.
npm install -g express
npm install -g express-generator

## Installation
-Create a MongoDB database named `mean-db` (`use mean-db`)
-Install packages and start the express.js web service
-Navigate to `http://127.0.0.1:3000` to see the express.js welcome page

## Install Dependencies
Now we need to install our dependencies. from the terminal of the working directory of mean-app type
npm install
We need to add a few more packages to our package.json file as a dependencies. Mongoose will be our connection to MongoDB, body-parser is used to examine POST/GET calls.

## Usage Instructions
All of the MVC pieces are built, but are also rudimentary and not flashy. The root of our webapp goes to the express.js landing page, but there is a schema created for a new object called `blobs`. To access `blobs`, follow the route that is already in place by going to `http://127.0.0.1:3000/blobs`.

Add a new blob by going to `http://127.0.0.1:3000/blobs/new`. 

All of the REST pieces are baked in as well. You can test them using a multitude of different REST based tools.

npm install mongoose --save 
npm install body-parser --save



## Application Development Process - BE:
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

Setup Mongoose to MongoDB - We will need to install the dependencies before we fire up the server

Next open up app.js and lets add our db.js file to the variables. by adding the line var db = require('./model/db');

var mongoose = require('mongoose');
mongoose.connect('mongodb://<user>:<password>@<url>:port/mean-db');

Step 4: Defining a Model

Before we can handle CRUD operations, we will need a mongoose Model. These models are constructors that we define. They represent documents which can be saved and retrieved from our database.

Mongoose Schema The mongoose Schema is what is used to define attributes for our documents.

Mongoose Methods Methods can also be defined on a mongoose schema. 

/model/blob.js

var mongoose = require('mongoose');  
var blobSchema = new mongoose.Schema({  
  message: String,
  email: String,
  dob: { type: Date, default: Date.now }
});
mongoose.model('Blob', blobSchema);

This is how a Schema is defined. We must grab mongoose and mongoose.Schema. Then we can define our attributes on our blobSchema for all the things we need for our DS. Also notice how we can define nested objects as in the meta attribute.


Step 5: Create the Controller
/routes/blobs.js

For testing purpose we will use the new.jade file that will display a form. We will build the form a bit later when we get to the Views. TDD :)



## Application Development Process - FE:

Step 1: Application layout
/client/index.html
This file contains the layout of the application. It include form template to insert blob details.
Some AngularJS built-in directives have also used in it such as ng-repeat, ng-show, ng-hide, ng-click etc. These directives add some special behaviour into the application to make it more interactive.

Step 2: CRUD - client-side point of view
So, now we are going to retrieve and read these data from the database and display it in the application’s main page.
For this, create a module name crudApp and a controller name DbController in the js/angular-script.js. 

The returned json data has stored in $scope.XXX. 

Now, the details property has all the blobs details which can be displayed in the application index.html page using ng-repeat directive.

We wrap this ability with "ngInfiniteScroll"

What is Infinite Scrolling?

Infinite scrolling, also known as "endless scrolling," "unpagination," and others, is a technique where additional content for a web page is appended dynamically to the bottom of the page as the user approaches the end of the content. You may have seen this technique on the Facebook timeline or on Pinterest's homepage.


Insert Into Database : blobs Detail

To insert blobs details, we need a form with different input fields.

So, let’s create a form.html page which contain a form to insert blob details.


## Contribution
Create a fork of the project into your own reposity. Make all your necessary changes and create a pull request with a description on what was added or removed and details explaining the changes in lines of code. If approved, project owners will merge it.

Licensing
---------
MEAN_CRUD is freely distributed under the MIT License. See LICENSE for details
