class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem = (id , name , price , quantity)=>{
    if (typeof id !== 'number' || typeof name !== 'string' || typeof price !== 'number' || typeof quantity !== 'number'){
      throw new Error("invalid Input ⛔");
    }
    if(price <=0) throw new Error("Price must be positive");
    if(quantity<=0)throw new Error("Quantity must be positive");
    const existingItem = this.items.find(item =>item.id==id);
    if(existingItem){
        existingItem.quantity = existingItem.quantity+quantity;
    }
    else{
        this.items.push({id , name , price , quantity});
    }

    
  }
  //remove item 
  removeItem = (id )=>{
    if(typeof id !=='number'){
        throw new Error("Invalid data type");
   
    }
    const index = this.items.findIndex(item => item.id === id);
    if (index === -1) throw new Error("Item not found");
    this.items.splice(index, 1);

  }
  //update quantity
  updateQuantity = (id , newQuantity)=>{
   if(newQuantity<=0) throw new Error("Quantity must be posistive cant be zero");
   const item = this.items.find(item=>item.id ===id);
   if(!item){
    throw new Error("Item not found");

   }
   item.quantity += newQuantity;
  }
  getTotal = () => {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
      };
    
  getItemCount = () => {
        return this.items.reduce((count, item) => count + item.quantity, 0);
      };
  PrintItems = () => {
        console.log(this.items); // ✅ Accessing items array
      };

}

//creating instance
const cart = new ShoppingCart();
cart.addItem(1, "Laptop", 50000, 1);
cart.addItem(1, "Laptop", 50000, 1);
cart.addItem(1, "Laptop", 50000, 1);
cart.addItem(2, "Mouse", 1500, 2);
cart.PrintItems()
console.log(cart.getTotal()); 
console.log(cart.getItemCount()); 
