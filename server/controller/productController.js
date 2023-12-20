import Product from "../model/productSchema.js";
import path from "path";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    console.log(products);
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createdProducts = async (req, res) => {
    const myway = req.file.path
    console.log(myway);
  
    try {
        console.log(req.body);
      const products = new Product({
        name: req.body.name,
        price: req.body.price,
        image: myway.replace(/\\/g, "/"), 
      });
  
      await products.save();
      res.send(products);
    } catch (error) {
      console.error("Error creating product:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  

export  const deleteAllData = async (req,res) => {
    try {
      await 
      Product.deleteMany();
      console.log('All Data successfully deleted');
    } catch (err) {
      console.log(err);
    }
};
