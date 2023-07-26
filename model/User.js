const mongoose=  require("mongoose");

const UserSchema =new mongoose.Schema({

    name : {
        type: String
    },
    email : {
        type: String
    },
    password : {
        type: String
    },
    mobile : {
        type: Number
    },
    status : {
        type: Number,
        default: 1
    }
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
