//OTP Countdown Simulator
//Show “OTP Sent Successfully”
console.log("OTP sent successfully")
let sec=11;

//Start 10-second countdown
let inter=setInterval(()=>{
    sec--;
    console.log(`OTP can be sent again after ${sec} secs`)
    if(sec==1){
        console.log("Resend OTP")
        clearInterval(inter)
    }
},1000)
