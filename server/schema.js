const fs = require('fs')
const { makeExecutableSchema } = require("graphql-tools");

const { resolvers } = require('./resolvers')

let typeDefs = fs.readFileSync("schema.graphql", {
    encoding: "utf8",
    flag: "r",
});

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.esports = { schema }
