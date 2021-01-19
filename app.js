
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

function date()
{
    var d = new Date()
    console.log(d)
}

var date = date()


function Name(){

    var fName = "ali"
    var lName = "ahmed"
    var fullName = fName + lName
    console.log(fullName)
} 
var name = Name()
console.log(name)




function number(){
    
    var n1  = 10
    var n2  = 20
    return n1+n2
}
var num = number()
console.log(num)

3
function cal(){
    
    var n1  = 10
    var n2  = 20
    return n1 * n2
}
var num = cal()
console.log(num)



function sqr(s){
    
    var n   = 10
    return n*n
  
}
var num = sqr()
console.log(num)



function fac(s){
    
    var n   = 5
  for(var i = n-1; i>0;i--){
      n = n * i
  }
  console.log(n)
}
var num = fac()
console.log(num)