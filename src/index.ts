// Basic types
let firstName:string = 'Vitor'
let chosenNumber:number = 10
let booleanValue:boolean = true

// Array(type)
let myArray:number[] = [1,2,3]

// Tuples
let myTuple:[number, string, number[]] = [1, 'vitor', [1,2,3]] // order matters

// Object literals => {prop: value}
const user:{name:string, age:number, student:boolean} = {
    name: 'Vitor',
    age: 30,
    student: true,
}

// Any
let anything:any = 0
anything = 'test'
anything = true
anything = 1

// Union type
let numberOrString:string | number = "123"
numberOrString = 123

// Creating type alias
type myIdType = string | number
let newVariable:myIdType = 123
newVariable = 'Test'

// Enum
// Example => Clothing sizes (sizes: S, M, L)
enum Size {
    S = "small",
    M = "medium",
    L = "large" 
}

const tShirt = {
    color: "blue",
    size: Size.L
}

// Literal types
let test: "authenticated" | null
test = "authenticated" // only option
test = null

// Functions
function sum(a: number, b: number) { // controls the arguments types
    return a + b
}

function sayHelloTo(name: string): string { // controls the return type
    return `Hello, ${name}`
}

function logger(msg: string): void { // function that returns nothing
    console.log(msg)
}

// Interfaces
interface MathFunctionParams {
    n1: number,
    n2: number,
}

function sumNumbers(nums: MathFunctionParams) {
    return nums.n1 + nums.n2
}

console.log(sumNumbers({n1: 1, n2: 2}))

// Narrowing => Types checking
function doSomething(info: number | boolean) {
    if(typeof info === "number") {
        `Your input number is ${info}`
    } else {
        'It is not a number'
    }
}

// Generics