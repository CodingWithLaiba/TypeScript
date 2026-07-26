"use strict";
// Basic Types
Object.defineProperty(exports, "__esModule", { value: true });
let id = 5;
let company = "TypeScript";
let isPublished = true;
let x = "Hello";
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "Hello"];
//Tuples
let person = [1, "Brad", true];
//Tuple array
let empolyee;
empolyee = [
    [1, "Brad"],
    [2, "John"],
    [3, "Jill"],
];
//unions
let pid;
pid = "22";
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["left"] = 2] = "left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Down);
const user = {
    id: 1,
    name: "john",
};
//Type Assertion
let cid = 1;
let customerId = cid;
//Functions
function addnum(x, y) {
    return x + y;
}
console.log(addnum(1, 4));
function log(message) {
    console.log(message);
}
log(2);
const user1 = {
    id: 1,
    name: "john",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now register`;
    }
}
const obj1 = new Person(1, "abc");
const obj2 = new Person(2, "def");
console.log(obj1, obj2);
console.log(obj1.register());
//subclass
class Employee extends Person {
    position;
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "sham", "Developer");
console.log(emp.register());
//Generics
// function getArray(items:any[]):any[]{
//     return new Array().concat(items)
// }
// let numArray = getArray([1,2,3,4])
// let strArray = getArray(['brad','john','mike'])
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['brad', 'john', 'mike']);
strArray.push('1');
//# sourceMappingURL=index.js.map