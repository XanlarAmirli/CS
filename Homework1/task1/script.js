// 1.Create a string, number, boolean, undefined, null, symbol, and bigint variable.

let mystring = "Xanlar"
let mynumber = 21
let myboolean = true
let myunderfined = undefined 
let mynull = null
let mysymbol = Symbol("Hi") 
let mybigint = 12345678901234567890123456780n

//2.Print each variable type using typeof.

console.log (typeof mystring)
console.log (typeof mynumber)
console.log (typeof myboolean)
console.log (typeof myunderfined)
console.log (typeof mynull)
console.log (typeof symbol)
console.log (typeof bigint)

//3.Use Let,const,and var to declare variables and explain their differences.

let city = "Baku"
city = "Ganja"
console.log (city);

// const name = "Xanlar"
// name = "Cavid"
// console.log (name);


var country1 = "Estonia"
// var country = "Azerbaijan"   
console.log(country1)


//Let: allows rassigment. (You can reassign a "Let" variable, but you cannot reclare it)
//const: does not allow reassingmet .(You cannot ressign or redeclare a "const" variable)
//var: allows reaasignment. (You can reassign or redaclare a "var")


//4.Use backticks to create a dynamic message that includes (Firstnam , Lastname, age, country, hobby, accupation) variables.


let firstname = "Xanlar"
let lastname = "Amirli"
let age = 21
let country = "Azerbaijan"
let hobby = "cars"
let occupation = "IT"


    console.log (`Hi, Iam ${firstname} ${lastname}, I am ${age} years old, I live in ${country}, My hobby is ${hobby}, and I work as a ${occupation}.`)


//5. Use arithnetic  operators (+, -, *, /, &,).

let x = 5
let y = 15


console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)


let t = 15
let u = 10 
let z = "15"


console.log(t == z)  
console.log(t === z) 
console.log(z > u)  
console.log(u > t)  
console.log(z >= u)  
console.log(t <= u)  
console.log(t != z); 
console.log(t != u);   
console.log(t !== u); 
console.log(u !== z);


//7. Use  logiacal operators (&&, ||, !,). 

let a = true  
let b = false  
let c = 15 
let d = 25 
 
console.log(a && b) 
console.log(c > 5 && d > 15) 
console.log(a || b) 
console.log(c > 20 || d < 15) 
console.log(!a) 
console.log(!b)




