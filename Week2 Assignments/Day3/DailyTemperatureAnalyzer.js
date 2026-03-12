//Daily Temperature Analyzer
console.log('Assignment1(Basic):')
const temperatures = [32, 35, 28, 40, 38, 30, 42];

//filter() temperatures above 35
const t35=temperatures.filter((Element)=>Element>35)
console.log('Temperature above 35:',t35)

//map() to convert all temperatures from Celsius → Fahrenheit
const ctoF=temperatures.map((Element)=>(Element*(9/5)+ 32))
console.log('Temperature in Fahrenheit:',ctoF)

//reduce() to calculate average temperature
const tsum=temperatures.reduce((acc,Element)=>acc+Element)
console.log('Average temperature:',tsum/temperatures.length)

//find() first temperature above 40
const t40=temperatures.find((Element)=>Element>40)
console.log('First temperature above 40:',t40)

//findIndex() of temperature 28
const t28I=temperatures.findIndex((Element)=>Element==28)
console.log('Index of the temperature 28:',t28I)
