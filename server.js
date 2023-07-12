const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const {MongoClient} = require("mongodb");

//initialize middleware
//we use to have to install body parser but now it is a built in middleware
// function of express. It parses incoming JSON payload.
app.use(express.json({ extended: false}));
//a resuable function
const withDB = async(operations, res) => {
  try {
    const client = await MongoClient.connect("mongodb://localhost:27017");
    const db = client.db("blog");
    await operations(db);
    client.close();
  }
  catch(error) {
    res.status(500).json({message: "Error connecting to database", error});
  }
}

app.get("/api/articles/:name", async(req, res) => {
  withDB(async(db) => {
    const ArticleName = req.params.name;
    const articleInfo = await db.collection("articles").findOne({name: ArticleName});
    res.status(200).json(articleInfo);
  }, res)
});

//comments functionality
app.post('/api/articles/:name/add-comments', (req, res) => {
  const {username, text} = req.body;
  const ArticleName = req.params.name;
  withDB(async(db) => {
    const articleInfo = await db.collection("articles").findOne({name: ArticleName});
    await db.collection('articles').updateOne({name: ArticleName}, 
      {
        $set: {comments: articleInfo.comments.concat({username, text}) }
      }
    );
    const UpdateArticleInfo = await db.collection('articles').findOne({name: ArticleName});
    res.status(200).json(UpdateArticleInfo);
  }, res);
  //articlesInfo[ArticleName].comments.push({username, text});
  //res.status(200).send(articlesInfo[ArticleName]);
})

{/* 
//just a test route for now
app.get('/', (req, res) => res.send("Hello, World!"));
//get a response using post in postman
app.post('/', (req, res) => res.send(`Hello ${req.body.name}`));
//another method to get a resonse using get in postman
app.get('/hello/:name', (req, res) => res.send(`Hello ${ req.params.name}`));
*/}

app.listen(PORT, () => console.log(`server started at ${PORT}`));