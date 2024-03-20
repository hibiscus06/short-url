const mongose = require('mongoose')

const userSchema = new mongose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true 
        },
        password:{
            type:String,
            required:true
        }
    },{timestamps:true}
);

const User = mongose.model("user",userSchema)

module.exports = User