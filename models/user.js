const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require: true,
        min:5,
        max: 60,
        unique: true,
        
        
    },
    email:{
        type: String,
        trim: true,
        required:[true,"Enter Email Address"],
        // min:6,
        match:
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        index: true,
    },

     password:{
         type:String,
         required: true,
         min:[6, "Password must be atleast 6 characters long"],
         max:[32, "Password must be between 6-32 characters, must contain atleast one lowercase, upercase and symbol (!@#$%^&*()"],
         

     },
     profilePictureClose:{
         type:String,
         default:"",
     },
     profilePicturePublic:{
        type:String,
        default:"",
     },
     followers:{
         type:Array,
         default:[],
     },
     following:{
        type:Array,
        default:[],
    },
    friends:{
        type:Array,
        default:[],
    },
    isAdmin:{
        type:Boolean,
        default:false ,
    },

},
{ timestamps: true}

);

module.exports = mongoose.model("User", userSchema);
