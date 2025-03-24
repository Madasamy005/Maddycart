const orderModel=require('../Models/orderModel')
const productModel=require('../Models/productModel')
//Create Order http://localhost:7000/api/v1/order
exports.createOrder = async(req, res, next) => {

    //console.log(req.body ,'DATA');
    const cartItems= req.body;
    const amount=cartItems.reduce((acc,item)=>(acc+item.product.price * item.qty),0);
    console.log(amount,"Amount")
    const status='Success';
    const order = await orderModel.create({cartItems,amount,status})

    cartItems.forEach(async (item)=>{
        const product =await productModel.findById(item.product._id);
        product.stock =product.stock -item.qty;
        await product.save();
    })



    res.status(201).json({
        success: true,
        order
    });
};
