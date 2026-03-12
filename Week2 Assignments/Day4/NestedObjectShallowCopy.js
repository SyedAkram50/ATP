//Shallow Copy 
const user = {
    id: 101,
    name: "Ravi",
    preferences: {
        theme: "dark",
        language: "en"
    }
};

//Shallow copying
let copycuser={...user}

//Changing name in the copied
copycuser.name='Akram'

//Changing preferences.theme in the copied
copycuser.preferences.theme='bright'

//printing
console.log(user)
console.log(copycuser)
