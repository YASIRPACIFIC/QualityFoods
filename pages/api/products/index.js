import nc from "next-connect";
import product from "../../../models/product";
import db from "../../../utils/db";

const handler = nc();

handler.get(async (req,res) =>{
    await db.connect()
    const products = await product.find({})
    await db.disconnect();
    res.send(products);
});
export default handler