const express = require("express")
const bodyParser = require('body-parser')
const express_graphql = require("express-graphql");

const { schema } = require('./schema')

const app = express()

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
)
app.use(
  "/graphql",
  express_graphql({
    schema: schema,
    graphiql: true,
  })
)

app.listen(5000, () => console.log("Express is now live at localhost:5000"))
