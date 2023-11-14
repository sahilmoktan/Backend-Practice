express generator 

mongodb
    dbs, models, schema, collections, documents

intermediate mongodb
    How can I perform a case-insendtive search in Mongoose?
    How do I find documents where an array field contains all of a set of values?
    How can I search for documents with a specific date range in Mongoose?
    How can I filter documents based on the existence of a field in Mongoose?
    How can I filter documents based on a specific field's length in Mongoose?

Session and cookies

Understanding sessions
    creating sessions, using sessions accross routes and destroying
    creating cookies, using cookies accross routes and destroying cookies

<!-- ------------------------------- -->
old task for staring
- make an route, where one page is sown using css also
    install express
    express js boilerplate code
    ejs setup
        install ejs
        set view engine
        create views folder
        render ejs files inside route
    express static files setup
    arcitecture of public folder


<!-- express-generator -->
to create new app withh generator
    npm i express-generator -g  //for our system
    express appname --view=ejs  //in terminal
    .then
    cd appname
    npm i
    
    
<!-- mongodb
    dbs, models, schema, collections, documents    -->
    dbs explained on note picture, eg MongoDb => RentalHouse, Amazon family ko data => Models

	install mongodb : for gui, OR u can connect in atlast(cloud v)
	install mongoosejs : for coding : npm i mongoose
	require & Setup connection  :
	make schema :
	create model :    
     
     	   const mongoose = require('mongoose')  //require:magu
     	   mongoose.connect('mongodb://127.0.0.1:27017/practiceProject')  //setup connection: it creates database
     	   //<node> mongose bata connect to mongodb localhost ko ... bata practiceproject ma
     	   
     	   const userschema = mongoose.Schema({
            username: string,
            name: string,
            age: Number
           })  // doucment ko kind ma hune rules

           module.exports = mongoose.model("name", userschema)  // name:collection, it is Model
     	   
     	   
    
58:00