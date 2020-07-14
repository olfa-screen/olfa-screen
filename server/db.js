const { Pool } = require('pg');
require('dotenv').config();

// env not working
PG_URI = 	'postgres://sawkfvpy:hqyRId-w-LBaw7xbIDCUib6fN0YzXtkh@ruby.db.elephantsql.com:5432/sawkfvpy';

const pool = new Pool({
  connectionString: PG_URI
});

// const pool = new Pool({
//   connectionString: process.env.PG_URI,
// });

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback); // a function that will return invocation of pool.query();
  },
};