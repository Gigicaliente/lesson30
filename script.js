//task1

let a = 10
let b = 5
let c = 2

console.log(a+b+c)
console.log(a+c-b)
console.log(a*b/c)
console.log(a+b+c)
console.log(a%b)

//task2

let x = 7
console.log(x++ + ++x)
console.log(x-- - --x)

//task3
let n1 = 4;
let n2 = 5;
let sum = n1 + n2
console.log("The result is: " + sum )

//task4

console.log(a > b && a > 0 && b > 0)
console.log(c < 10 || c==2)
console.log(a/c != 5)


//task5
console.log(10=='10')
console.log(10 ==='10') //v pervom sluchae ne uchityvaetsya tip, poetomu vyvoditsya "True", vo vtorom uchityvaetsua tip, poetomu vyvoditsya "False"

//task6
let z = 3
let result = (z%2 == 0 || z%3 == 0) && z % 6 !== 0 
console.log(result)


let y = 8

let result2 = !(y > 10 || y < 5)
console.log(result2)