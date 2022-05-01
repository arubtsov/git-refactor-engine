const { Pool } = require('pg')

const pool = new Pool()

module.esports = {
    resolvers: {
        Query: {
            repository: async function (_, { name, user }) {
                return await pool.query('SELECT * FROM repositories')
            },
        },
    },
}
