const {Client} = require('pg');
require('dotenv').config();

const client = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DB,
});

client.connect(
    (err)=>{
        if (err) throw err.message;
        console.log('CONNECTED TO AMAZON SERVER AT PORT 5432');
    }
)

module.exports = client;