const productModel = require("../Models/productModel")

//Get Products API - http://localhost:7000/api/v1/products
exports.getProducts= async (req,res,next)=>{

    const query= req.query.keyword? {name : {
        $regex : req.query.keyword,
        $options:'i'
    }}:{}

    const products= await productModel.find(query);
    res.json({
        success :true,
        products
        
    })
}

// Get Singleproduct Api - http://localhost:7000/api/v1/products/id

exports.getSingleProduct= async(req,res,next)=>{
    console.log(req.params.id ,"ID")
     try{
        const product= await productModel.findById(req.params.id );
        res.json({
            success :true,
            product
        })

     } catch(error){
        res.json({
            success:false,
            message:error.message
        })
     }
  
}