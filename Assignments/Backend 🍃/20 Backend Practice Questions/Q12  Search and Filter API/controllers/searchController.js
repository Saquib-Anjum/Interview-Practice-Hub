import express from 'express';
//sample data
const products = [
    { id: 1, name: 'MacBook Pro', category: 'electronics', price: 1999, inStock: true },
    { id: 2, name: 'iPhone 13', category: 'electronics', price: 799, inStock: true },
    { id: 3, name: 'Wireless Headphones', category: 'electronics', price: 199, inStock: false },
    { id: 4, name: 'Desk Chair', category: 'furniture', price: 249, inStock: true },
    { id: 5, name: 'Coffee Table', category: 'furniture', price: 150, inStock: false },
    { id: 6, name: 'Notebook', category: 'office', price: 9, inStock: true },
    { id: 7, name: 'Gaming Laptop', category: 'electronics', price: 1599, inStock: true },
    { id: 8, name: 'Bluetooth Speaker', category: 'electronics', price: 89, inStock: true },
  ];
const searchProduct = async(req,res)=>{
try{
    const { 
        search, 
        category, 
        minPrice, 
        maxPrice, 
        inStock,
        sortBy,      
        sortOrder,   
        page = 1,     
        limit = 10    
      } = req.query;
     let  filteredProducts = [...products]
    // Apply all filters
  if (search) {
    filteredProducts = filteredProducts.filter(product => 
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  
  if (category) {
    filteredProducts = filteredProducts.filter(product => 
      product.category.toLowerCase() === category.toLowerCase()
    );
  }
  
  if (minPrice) {
    filteredProducts = filteredProducts.filter(product => 
      product.price >= Number(minPrice)
    );
  }
  
  if (maxPrice) {
    filteredProducts = filteredProducts.filter(product => 
      product.price <= Number(maxPrice)
    );
  }
  
  if (inStock) {
    const inStockBool = inStock.toLowerCase() === 'true';
    filteredProducts = filteredProducts.filter(product => 
      product.inStock === inStockBool
    );
  }
  
  // Apply sorting
  if (sortBy) {
    const order = sortOrder === 'desc' ? -1 : 1;
    filteredProducts.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return -1 * order;
      if (a[sortBy] > b[sortBy]) return 1 * order;
      return 0;
    });
  }
  
  // Apply pagination
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
  
  // Return response with pagination metadata
  res.json({
    totalItems: filteredProducts.length,
    totalPages: Math.ceil(filteredProducts.length / limit),
    currentPage: Number(page),
    itemsPerPage: Number(limit),
    products: paginatedProducts
  });
}catch(err){
    console.log(err);
    res.json({
        success:false,
        message:err.message
    })
}
}
const filterProduct = async (req,res)=>{
    try{
  
    }catch(err){
        console.log(err);
        res.json({
            success:false,
            message:err.message
        })
    }
}

export {searchProduct , filterProduct};