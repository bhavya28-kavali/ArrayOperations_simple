const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
// filter() to get only inStock products
const inStockProducts = cart.filter(item => item.inStock);
console.log("In-Stock product:", inStockProducts);

// Map() to create a new array with :{name,totalPrice}
let productTotals = inStockProducts.map(item => {
  return {
    name: item.name,
    totalPrice: item.price * item.quantity
  };
});

console.log(productTotals);

// reduce()to calculate grand total cart value
let grandTotal = inStockProducts.reduce((sum, item) => {
  return sum + (item.price * item.quantity);
}, 0);

console.log(grandTotal);

// use find() to get deatils of "Mouse"
let mouseDetails = cart.find(item => item.name === "Mouse");
console.log(mouseDetails);

// use findIndex() to find the position of "keyboard"
let keyboardIndex = cart.findIndex(item => item.name === "Keyboard");
console.log(keyboardIndex);
