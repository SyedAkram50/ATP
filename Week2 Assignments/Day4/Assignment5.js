//Deep Copy 
const order = {
  orderId: "ORD1001",
  customer: {
    name: "Anita",
    address: {
      city: "Hyderabad",
      pincode: 500085
    }
  },
  items: [
    { product: "Laptop", price: 70000 }
  ]
};

//Deep copying
let copyorder=structuredClone(order)

//Changing cumstomer.address.city in copied
copyorder.customer.address.city='Mumbai'

//Changing items[0].price in copied
copyorder.items[0].price=50000

//Verifing original object remains unchanged
console.log(order)
console.log(copyorder)
