const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function getTotalAmountForProducts(products) {
  let totalPrice = 0;
 
  products.forEach(product => {
    totalPrice += product.price;
  });
 
  return totalPrice;
}
 
console.log(getTotalAmountForProducts(products)); // prints 33.46