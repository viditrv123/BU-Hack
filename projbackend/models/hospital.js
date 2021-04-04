var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var hospitalSchema = new Schema({
    username:{
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique:true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type:Number,
        default: 2
    },
    lat:{
        type:Number
    },
    long:{
        type:Number
    },
    doctors:[{doctorname:{
        type:String
    },
    email:{
        type:String
    }
}]
  },{
      timestamps:true
  });

  
  module.exports=mongoose.model("Hospital",hospitalSchema);