import express from 'express';
import axios from 'axios';
const productController = async( req , res)=>{
const baseUrl = "https://dummyjson.com/products/search?q="
const {category} = req.body;
const apiData = await axios.get(`https://dummyjson.com/products/search?q=${category}`);
const data = await apiData.data;

res.json({
   data
})
}
export {productController};