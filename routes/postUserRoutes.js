const express = require('express');
const routes = express.Router();
const pg = require('../db/connection');
const postResponse = require('../response/postResponse');
const errResponse = require('../response/errorResponse');

routes.post('/', (req,res)=>{
    var nama = req.body.nama;
    var email = req.body.email;
    var password = req.body.password;
    pg.query(
        'INSERT INTO users (nama, email, password) VALUES($1,$2,$3)',
        [nama,email,password],
        (err,rows) => {
            if (err){
                errResponse.response(err.message,res,res.statusCode);
            }else{
                postResponse.response('Succesfully Adding Data',res);
            }
        }
    );
})

module.exports = routes;