function hello()
{
    console.log("hey how are you")
    return x
}
x = " am returning anyway"
console.log(x)
hello()


function average(a, b, c)
{
return (( a + b + c ) / 3 ) + 10
}
let a=10
let b=20
let c=30
console.log(average(a, b, c))


//advanced  type of functions or arrow functions
const sum = (p, q) =>
{
return p+q
}
console.log(sum(10, 30))

const avg = (m, n, o, p) =>
{
    return ((m+n+o+p)/4)
}
console.log(avg(300, 300, 400, 600))

//normal function with no parameter
let biday = function () {return "happieee birdy"}
console.log(biday())

//fat arrow function with no parameter
let bidayf = () => {return "happieee bday"}
console.log(bidayf())

//normal function with one parameter
let birdy1 = function(name)
{
    return "happie bday " + name
}
console.log(birdy1("akhill"))

//fat arrow function with one parameter
let birdyf1 = (name) => {return "happie birdy "+ name}
console.log(birdyf1("amith"))

//normal function with 2 parameter
let birdy2 = function(name, age)
{
    return "happie " + age + "th birdy " + name
}
console.log(birdy2("abhi", 24))

//fat arrow function with two parameter
let birdyf2 = (name, age) => {return "happie " + age + "th birdy " + name}
console.log(birdyf2("manju", 28))