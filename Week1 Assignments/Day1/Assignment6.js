//Function to find sum of an array
function sum(a){
    let s=0
    for(i=0;i<a.length;i++){
        s=s+a[i]
    }
    return s 
}
console.log(sum([90,78,65,98]),'is the sum of the array')
