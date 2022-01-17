import  mongoose  from "mongoose";

const productSchema = new mongoose.Schema({
name:{ type:String,required:true},
slug:{ type:String,required:true,unique:true},
image:{ type:String,required:true},

},{
    timestamps:true
});
const product = mongoose.models.product || mongoose.model('product',productSchema);
export default product;