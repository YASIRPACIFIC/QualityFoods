import nc from "next-connect";
import product from "../../models/product";
import db from "../../utils/db";
import data from "../../utils/data";

const handler = nc();

handler.get(async(req,res)=>{
    await db.connect()
await product.deleteMany();
await product.insertMany(data.products);

   
    await db.disconnect();
    res.send({message:'seeded successfully'});
});
export default handler