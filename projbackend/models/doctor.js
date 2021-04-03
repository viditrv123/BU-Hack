var mongoose = require('mongoose');
const user = require('./user');
  var Schema = mongoose.Schema;

  var doctorSchema = new Schema({
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
        default: 1
    },
    patient:[{username:{
        type:String
    },
    email:{
        type:String
    },
    bp:{
        type:String,
        default:"NA"
    },
    temp:{
        type:String,
        default:"NA"
    },
    allergy:{
        type:String,
        default:"NA"
    },
    time:{
        type:String,
        default:"NA"
    },
    date:{
        type:String,
        default:"NA"
    },
    doctor_remark:{
        type:[],
        
    }
    
}]
  },{
      timestamps:true
  });


  module.exports=mongoose.model("Doctor",doctorSchema);