//Student Marks List
console.log('Assignment3(Basic):')
const marks = [78, 92, 35, 88, 40, 67];

//Pass marks
const passedMarks=marks.filter(mark=>mark>=40)
console.log('Marks >=40 :',passedMarks)

//Add 5 grace marks to each student
const graceMarks=marks.map(mark=>mark+5)
console.log('After giving 5 grace marks:',graceMarks)

//Hishes marks 
const highestMarks=marks.reduce((acc,mark)=>acc<mark? mark:acc)
console.log('Highest marks in the class',highestMarks)

//marks below 40
const marksBelow40=marks.find(mark=>mark<40)
console.log('Marks below 40:',marksBelow40)

//Index of 92
const indexOf92=marks.findIndex(mark=>mark===92)
console.log('Index of 92:',indexOf92)
