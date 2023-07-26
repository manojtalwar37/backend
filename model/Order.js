const mongoose=  require("mongoose");

const OrderSchema =new mongoose.Schema({

    firstname : {
        type: String
    },
    lastname : {
        type: String
    },
    username : {
        type: String
    },
    email : {
        type: String
    },
    address : {
        type: String
    },
     address2 : {
        type: String
    },
    country : {
        type: String
    },
    state : {
        type: String
    },
    zip : {
        type: String
    },
    card : {
        type: String
    },    
    status : {
        type: Number,
        default: 1
    }
});

const OrderModel = mongoose.model("order", OrderSchema);

module.exports = OrderModel;
