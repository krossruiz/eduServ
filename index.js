const mongo = require('mongodb').MongoClient;
const url = 'mongodb+srv://educare:vaHt7ABJTExsyYEl@cluster0-k1sxg.mongodb.net/test?retryWrites=true&w=majority';
let db;
let dogCollection;

mongo.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err, client) => {
  if (err) {
    console.error(err)
    return
  }
  db = client.db('kennel');
  dogCollection = db.collection('dogs');
});

const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/getDogs', (req, res) => {
    if(dogCollection){
        dogCollection.find().toArray((err, dogs) => {
            res.send(dogs);
        })
    }
    else{
        res.send("Patiently waiting for getDogs implementation.");
    }
})

app.post('/postDog', (req, res) => {
   let {dog} = req;
   if(dogCollection){
    collection.insertOne(dog, (err, result) => {
        res.send(result);
    });
   }
   else{
    res.send("Patiently waiting for postDog implementation.");
   }
});

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))