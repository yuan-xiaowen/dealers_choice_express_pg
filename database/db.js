const pg = require('pg')
const client = new pg.Client(process.env.DATABASE || 'postgres://localhost/seasons')
client.connect()

module.exports = client