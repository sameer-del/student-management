const moongose = require("moongose");

const { schema } = moongose;

const userSchema = new Schema({
    name:String,
    email:{
        type:String,
        unique:true,
    },
    passwor:String,
});

const userModel = moongose.model('user', userSchema);
module.exports = userModel;