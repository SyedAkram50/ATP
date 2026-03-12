//Online Course Name Processor
console.log('Assignment2(Basic):')
const courses = ["javascript", "react", "node", "mongodb", "express"];

//Course name whose length is greater than 5
const lenOfCourse=courses.filter(course=>course.length>5)
console.log('Courses whose length > 5:',lenOfCourse)

//To Uppercase
const upperCase=courses.map(course=>course.toUpperCase())
console.log('All name in uppercase:',upperCase)

//Course is react
const courseReact=courses.filter(course=>course==='react')
console.log('Course is react:',courseReact)

//FindIndex of node
const indexNode=courses.findIndex(course=>course==='node')
console.log('Index of node:',indexNode)
