//Student Performance Dashboard
console.log('Assignment2(Adv):')
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//filter() students who passed (marks ≥ 40)
let pass=students.filter((stuObj)=>stuObj.marks>=40)
console.log('Students who are passed:',pass)

/*map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D*/
let grade=students.map((stuObj)=>{
    if(stuObj.marks>=90){
        stuObj.grade='A'
    }
    else if (stuObj.marks>=75) {
        stuObj.grade='B'
    }
    else if (stuObj.marks>=60) {
        stuObj.grade='C'
    }  
    else{
        stuObj.grade='D'
    }
    return stuObj
})
console.log('Students with grades:',grade)

//reduce() to calculate average marks
let ssum=students.reduce((acc,stuObj)=>acc+stuObj.marks,0)
console.log('Average marks of the students:',ssum/students.length)

//find() the student who scored 92
let mark92=students.find((stuObj)=>stuObj.marks==92)
console.log('Student who scored 92:',mark92)

//findIndex() of student "Kiran"
let indexKiran=students.findIndex((stuObj)=>stuObj.name=='Kiran')
console.log('Index of the student named Kiran:',indexKiran)
