//Function to search an element in an array
function searches(a,b){
    for(i=0;i<a.length;i++){
        if(a[i]==b){
            return i
        }
    }
    return 'not found'
}
console.log(searches([1,2,3,4,5],4))
console.log(searches([1,2,3,4,5],7))