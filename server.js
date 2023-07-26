const express=require("express");
const host = "127.0.0.1";
const port= 5000;
const app = express(); 
const bodyParser=require("body-parser");
const mongoose = require("mongoose");
const cors= require("cors");
const User = require('./model/User');
const Cart = require('./model/Cart');
const Category = require('./model/Category');
const { generateToken, verifyToken}  = require('./services/auth');
const Product = require("./model/Product");

const SendEmail = require("./services/mail");
const SendSMS = require("./services/sms");
const OrderModel = require("./model/order");
const auth =verifyToken;
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json())
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/xcart");

const db = mongoose.connection
db.on("open", function() {
    console.log("db connected");
});





app.get('/',(req,res) =>{
    res.json("working");
    
    });

    
    app.post('/login', async(req,res) =>{
        const user = await User.findOne(req.body);
    
        if(!user){
         return  res.json({status: false, msg: "User Not Found"});
        } 
        const token =generateToken(user);    
        return res.json({status: true, msg: "Login Successfully", token});
        
        });
    



        app.post('/register', (req,res) =>{
    
            const user = new User(req.body);
            user.save();
            //SendEmail(user.email,"register user","Success Register")
            SendSMS("9729493898","Success Register")
            res.json(user);
            
            });
       

            app.get('/getUser',auth, (req,res) =>{
               
                res.json(req.user);
            });

            app.get('/getcategories', async (req, res) => {
                const cat= await Category.find({});
                res.json(cat);
            });
            app.post('/all_Products',async(req,res) =>{
                const ele= await Product.find({
                    category:req.body.id
                })
                return res.json(ele);
             });
             app.post('/order',(req,res) =>{
                const odr= new OrderModel({
                    firstname:req.body.firstName,
                    lastname:req.body.lastName,
                  username:req.body.userName,
                email:req.body.email,
                address:req.body.address,
                address2:req.body.address2,
                zip:req.body.zip,
                card:req.body.card,
                });
                odr.save();
                return res.json({status:true});
             });
            
 
             
         app.get('/products',async(req,res) =>{
            const cate= await Product.find({
                category :req.body.id
            });
             res.json(cate);
         });
         app.post('/addCart', auth, async(req,res) =>{
            const product = new Cart({
                userId: req.user._id,
                productId : req.body.item._id,
                quantity: 1,
                price :req.body.item.price,
                name: req.body.item.thumbnail
            });    
            product.save();
         
         
             res.json(product);
         });
      
         app.get('/cartdata',auth,async(req,res) =>{
            const cate= await Cart.find({ 
                userId: req.user._id
            }).populate('productId');
             res.json(cate);
         });

         app.post('/deletecart',auth,async(req,res) =>{
const data = await Cart.findOneAndDelete({
                _id:req.body.cart._id,
                productId: req.body.cart.productId._id,
                userId: req.user._id
            })
       
    return res.json(data);
        
        });
            
            
            // app.get('/cat_all_Products', async (req, res) => {
            //     const elec= await Product.find( {
            //         category: req.body.category_id,
            //         is_stock: true
            //     }).populate(['user','category']);
            //     res.json(ele);
            // });

        
          






app.listen(port,host,()=>{
    console.log(`http://${host}:${port}`);
});