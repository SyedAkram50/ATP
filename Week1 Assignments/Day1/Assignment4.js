//Smallest element in an array
let marks=[90,78,65,98]
let sm=marks[0]
for(i=0;i<marks.length;i++){
    if(marks[i]<sm){
        sm=marks[i]
    }
}
console.log('Smallest element in marks array:',sm)
