//function to find the biggest number in three numbers
function bigger(a,b,c){
    if(a>b && a>c){
        return a
    }
    else if(b>c){
        return b
    }
    else{
        return c
    }
}
console.log(bigger(10,20,30),"is biggest")