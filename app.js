/*var date = new Date()
console.log(date)

var str = date.toString()
console.log(str.slice(3,7))
console.log("Today is "+str.slice(0,3))


if(str.slice(0,3)==="Sat"||str.slice(0,3)==="Sun"){
    console.log("It's Fun day")
}
else{
    console.log("Not a Fun day")
}


if (str.slice(7,10)<16){
    console.log("First fifteen days of the month")
}
else{
    console.log("Last days of the month")
}

var sec = date.getTime()
var min = sec/60
console.log(min)


var time = date.getHours()
console.log(time)
if(time<12){
    console.log("It's AM")
}
else{
    console.log("It's PM")
}

var set= new Date(31/01/2020)
console.log(set)

var d1 = new Date("01/01/2020")
var d2 = new Date("03/01/2020")
var dif = (d2.getTime()- d1.getTime())/1000*3600*24
console.log(dif)


var cName = "ali"
var cMonth = "Feb"
var n = 410
var Charge = 16
var net = n*Charge
var late = 350
var gros = net + late

console.log("Custome Name = "+ cName)
console.log("Month "+cMonth)
console.log("Number of Unit "+n)
console.log("Charges per unit "+Charge)
console.log("Net amount payable (within due date)" + net)
console.log("Late payment sur charge"+late)
console.log("Gross amount payable (after due date)" + gros)*/








//Function 

// function date()
// {
//     var d = new Date()
//     console.log(d)
// }

// var date = date()


// function Name(){

//     var fName = "ali"
//     var lName = "ahmed"
//     var fullName = fName + lName
//     console.log(fullName)
// } 
// var name = Name()
// console.log(name)




// function number(){
    
//     var n1  = 10
//     var n2  = 20
//     return n1+n2
// }
// var num = number()
// console.log(num)

// 3
// function cal(){
    
//     var n1  = 20
//     var n2  = 10
//     var op = prompt("enter opterator ")
//     switch(op){
//         case "+":
//             console.log("addition of a number :" + n1+n2)
//         case "-":
//             console.log("subtraction of a number :" + n1-n2)
//         case "+":
//             console.log("multiplication of a number :" + n1*n2)
//         case "+":
//             console.log("divsion of a number :" + n1/n2)
//     }
// }
// var num = cal()
// console.log(num)



// function sqr(s){

//     return s*s
  
// }
// var num = sqr(5)
// console.log(num)



// function fac(){
    
//     var n   = 5
//   for(var i = n-1; i>0;i--){
//       n = n * i
//   }
//   console.log(n)
// }
// var num = fac()
// console.log(num)



// function count (){
//     var n1 = 2
//     var n2 = 10

//     for(var i = n1;i<=n2 ;i++){
//         console.log(i)}
// }



// function Hypotenuse (){
//     var b = 2
//     var p = 10

//     function square (){
//        var h = Math.pow(b,2) + Math.pow(p,2)
//        return h
//     }

//     var Hypotenuse =  Math.sqrt(square())
//     console.log(Hypotenuse)  

// }
// var cal = Hypotenuse()
// console.log(cal)  



// function area (a,b){

//     var w 
//     var h 
//     return w*h
// }





// function pal (a){

//     var b
//     var c
//     for (var i = 0; i<a.length; i++){   
//         b = a.charAt(i)
//     }

//     for (var i = a.length; i>=0; i--){
//         c = a.charAt(i)
//     }
//     if(b==c){
//         console.log("this is palindorme")
//     }
//     else{
//         console.log("this is not palindorme")

//     }
// }
// pal("madam")




// function uperCase(a){
//     var str = a.split(" ")

//     for (var i = 0; i<str.length; i++){   
         
//         str[i] = str[i][0].toUpperCase() + str[i].substr(1);

//     }
//     console.log(str.join(" "))
    
// }
// uperCase("the quict brown fox")




// function long(l){

//     var str = l.split(" ")
//     var count = 0
//     var final = ""
//     for (var i = 0; i<str.length; i++){ 
//         if(str[i].length>count){
//             count = str[i].length
//             final = str[i]
//         }
//     }
//     return final
// }

// var c  =  long("Web Development Tutorial")
// console.log(c)




// function countWord(a,b){

//     var c = a.length + b.length
//     return c
// }
// console.log(countWord("ali","ahmed"))




// var r = 5
// function calCircumference(){

//     return 2*Math.PI*r
    
// }

// function calArea(){

//     return Math.PI*Math.pow(r,2)
    
// }
// console.log("circumference of a circle : "+ calCircumference().toFixed(2))
// console.log("area of a circle : "+ calArea().toFixed(2))






/////////////////////


// //Task1
// function power(a,b){
//     return a**b
// }
// //Task2
// function leap(y){
//     return y%4==0 ? true:false
// }
// //Task3
// function calcS(a,b,c){
//     return (a+b+c)/2
// }
// function calcArea(a,b,c){
//     var s=calcS(a,b,c)
//     return s*(s-a)*(s-b)*(s-c)
// }
// //Task4
// function average(a,b,c){
//     return (a+b+c)/3
// }
// function percentage(a,b,c){
//     return (a+b+c)/300*100
// }
// //Task5
// function indexOf(a=[],c){
//     for(var i=0;i<a.length;i++){
//         if(a[i]==c){
//             return i;
//         }
//     }
//     return -1;
// }
// //task6
// function remVow(a){    
//     return a.replace(/[aeiou]/gi, '')
// }
// //task7
// function countDoubleVowel(a){
//      var v=0
//     for (var i = 0; i < a.length-2; i++) {
//     var s=a.slice(i,i+2)
//         switch (s){
//             case "ae":
//             case "ea":
//             case "ui":
//                 v++;
//             break;
//         }
//     }    
//     return v
// }


// // Task 8
// function inMeter(a){

//     return a*1000 
// }
// function inCmeter(a){

//     return a*1000*100 
// }
// function inInches(a){

//     return a*1000*39.37 
// }
// function inFeet(a){

//     return a*1000*3.28
// }


// Task 9
function pay(){

    var overtime , workedhour = 55
    for(var i=1;i<=4;i++){

        overtime = workedhour - 40
        var overpay = overtime * 12

    }
    return overpay
}



// Task 10
function currency(){

    var input = 470
    var r100 = input/100
    var r50 = (input%100)/50
    var r10 = ((input%100)%50)/10
    console.log("100 notes : " + Math.floor(r100) )
    console.log("50 notes : " + Math.floor(r50) )
    console.log("10 notes : " + Math.floor(r10))
}
console.log(currency())