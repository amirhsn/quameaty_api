'use strict';

exports.response = function(values,res,statusCode){
    var data = {
        'status' : statusCode,
        'message' : values
    }
     res.json(data);
     res.end();
}