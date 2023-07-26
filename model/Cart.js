const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users"
        },
        productId: {
            type: String,
            ref: 'products'
        },
        quantity: {
            type: Number
        },
        name: {
            type: String
        },
        price: {
            type: Number
        },
        active: {
            type: Boolean,
            default: true
        },
        modifiedOn: {
            type: Date,
            default: Date.now
        }
    },
    { timestamps: true }
);

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;