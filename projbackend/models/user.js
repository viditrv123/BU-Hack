var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var userSchema = new Schema({
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
        default: 0
    },
    userhistory:[{
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
        doctor:{
            type:String,
            default:"NA"
        },
        doctor_remark:{
            type:String,
            default:"NA"
            
        }
    }]
  },{
      timestamps:true
  });

  
  module.exports=mongoose.model("User",userSchema);