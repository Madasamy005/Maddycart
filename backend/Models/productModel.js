const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    name:String,
    price:String,
    description:String,
    ratings:String,
    images:[
        {
            image:String
        }
    ],
    catagory:String,
    seller:String,
    stock:String,
    numOfReviews:String,
    createdAt:Date
});

const productModel=mongoose.model('product',productSchema);

module.exports = productModel;