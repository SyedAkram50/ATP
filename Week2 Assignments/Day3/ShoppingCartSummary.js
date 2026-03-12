//shopping cart summary
console.log('Assignment1(Adv):')
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//filter() to get only inStock products
let stock=cart.filter((cartObj)=>cartObj.inStock===true)
console.log('Products which are in stock:',stock)

//map() to create a new array with:  { name, totalPrice }
let newarr=cart.map((cartObj)=>{
    return {name:cartObj.name,price:cartObj.price}
})
console.log('NewArray with {name,price}:',newarr)

//reduce() to calculate grand total cart value
let gtotal=cart.reduce((acc,cartObj)=>acc+cartObj.price,0)
console.log('Grand Total of the cart:',gtotal)

//find() to get details of "Mouse"
let detailMouse=cart.find((cartObj)=>cartObj.name=='Mouse')
console.log('Details of Mouse:',detailMouse)

//findIndex() to find the position of "Keyboard"
let indexKeyboard=cart.findIndex((cartObj)=>cartObj.name==='Keyboard')
console.log('Index of the position of keyboard:',indexKeyboard)
