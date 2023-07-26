const mongoose=  require("mongoose");

const catSchema =new mongoose.Schema({

    id : {
        type: String
    },
    name : {
        type: String
    },
    
   image : {
        type: String
    },
    status : {
        type: Number,
        default: 1
    }
});

const Category = mongoose.model("categories", catSchema);

module.exports = Category;
