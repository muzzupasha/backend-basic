require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

const githubdata = {
    "data": [{
      "type": "articles",
      "id": "1",
      "attributes": {
        "title": "JSON:API paints my bikeshed!",
        "body": "The shortest article. Ever.",
        "created": "2015-05-22T14:56:29.000Z",
        "updated": "2015-05-22T14:56:28.000Z"
      },
      "relationships": {
        "author": {
          "data": {"id": "42", "type": "people"}
        }
      }
    }],
    "included": [
      {
        "type": "people",
        "id": "42",
        "attributes": {
          "name": "John",
          "age": 80,
          "gender": "male"
        }
      }
    ]
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res)=>{
res.send("twitter")
})

app.get('/insta', (req, res)=>{
res.send("hello insta")
})

app.get('/github', (req, res)=>{
    res.json(githubdata)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})