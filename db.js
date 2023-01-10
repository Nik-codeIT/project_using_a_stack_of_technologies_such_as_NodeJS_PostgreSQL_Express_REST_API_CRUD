const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  password: 'mypostgres',
  host: 'localhost',
  port: 5432,
  database: "node_postgresql"
})

module.exports = pool
