'use strict'

exports.response = (values,res)=>{
    var data = {
        'status' : 200,
        'message' : values
    }

      res.json(data);
      res.end();
}