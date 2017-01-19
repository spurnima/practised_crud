var bson=require('bson');

var MongoClient=require('mongodb').MongoClient,format =require('util').format;

MongoClient.connect('mongodb://127.0.0.1:27017',function(err,db){

  if(err)

  {

    throw err;

  }

  console.log("connected");

  //create file

  db.collection('mongodb_crud',function(error,collection){

    if(error)

    throw error;

    console.log('crude');

  //  cruds

    collection.insert(

      {

        "name": "yogee",

        "class": "mech"

      },

      {safe:true},

      function(error,docs){

        if(error)

        {

          throw error;

        }

        console.log(docs);

      }

    );

  //  var _id=new db.bson_serailizer.ObjectID('587f162172f131239d135fc6');

  var name="kishore";

    collection.update(

      {

        name:name

      },

      {$set:{"name":"bee"}},

      {safe:true},

      function(err)

      {

        if(err)

        throw err;

      }

    )





    collection.find({"class":"mech"}).toArray(

      function(error,yog){

        if(error)

        throw error;

        console.log(yog);

      }

    )

  });



});