const express = require('express');
const routes = express.Router();
const getResponse = require('../response/getResponse');
const pg = require('../db/connection');
const errResponse = require('../response/errorResponse');

routes.get('/', (req,res)=>{
    pg.query(
        'SELECT * FROM users',
        (err,rows)=>{
            if (err){
                errResponse.response(err.message,res,res.statusCode);
            }else{
                getResponse.response(rows.rows,res);
            }
        }
    );
});

module.exports = routes;