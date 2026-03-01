//creating an object user
let user = {
  name: "Ravi",
  city: "Hyderabad"
};
//shallow copying and adding a new property
let updatedUser={...user,age: 25}
//printing
console.log(user)
console.log(updatedUser)
