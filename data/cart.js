export let cart = JSON.parse(localStorage.getItem('cart'));
// here is the default value , cause if we use the website for the first time it might not have a cart in local storage and it will give us  NULL , so we set a dsfault value 
if (!cart) {
 cart =[{
    productId :'e43638ce-6aa0-4b85-b27f-e1d07eb678c6' ,
    quantity:2 
  },{
    productId :'15b6fc6f-327a-4ec4-896f-486349e85a3d' ,
    quantity:1
  }];
}


function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));  // and then in the maain string we must get the cart from localStorage
}




 export function addToCart(productId){


  let matchingItem;

  cart.forEach((cartItem)=>{
    if (productId===cartItem.productId) {
       matchingItem=cartItem;
    }

  });
 
  if (matchingItem) {
    matchingItem.quantity+=1;
  }
  else{
    cart.push({
      productId:productId,
      quantity :1
     });
  }

  saveToStorage();

}




export function removeFromCart(productId){
  const newCart = [];
   
  cart.forEach((cartItem )=>{
    if (cartItem.productId!==productId) {
      newCart.push(cartItem);
    }
   
  }); 
  cart=newCart;

  saveToStorage();

}