// const vs let
const x = 1;
let y = 5;

console.log(x, y);
y += 10;
console.log(x, y);
y = "sometext";
console.log(x, y);
// x = 4; // throws an error

// arrays - general
const t = [1, -1, 3];
t.push(5);

console.log(t.length);
console.log(t[1]);
t.forEach((value) => {
  console.log(value);
});
(value) => {
  console.log(value);
};

// arrays - concatenation
const arr = [1, -1, 3];
const arr2 = arr.concat(5);
console.log(arr);
console.log(arr2);

// arrays - mapping
const arr3 = [1, 2, 3];
const arr4 = arr3.map((value) => value * 2);
console.log(arr4);

const arr5 = arr3.map((value) => "<li>" + value + "</li>");
console.log(arr5);

// arrays - destructuring assignment
const arr6 = [1, 2, 3, 4, 5];
const [first, second, ...rest] = arr6;
console.log(first, second);
console.log(rest);

// objects - object literals
const object1 = {
  name: "Arto Hellas",
  age: 35,
  education: "PhD",
};
const object2 = {
  name: "Full Stack web application development",
  level: "intermediate studies",
  size: 5,
};
const object3 = {
  name: {
    first: "Dan",
    last: "Abramov",
  },
  grades: [2, 3, 4, 5],
  department: "Stanford University",
};

console.log(object1.name);
const fieldName = "age";
console.log(object1[fieldName]);
console.log(object2);
console.log(object3);

object1.address = "Helsinki";
object1["secret number"] = 12341;

// functions
const sum = (p1, p2) => {
  console.log(p1);
  console.log(p2);
  return p1 + p2;
};
const result = sum(1, 5);
console.log(result);

const square = (p) => {
  console.log(p);
  return p * p;
};
console.log(square(5));

const square2 = (p) => p * p;
console.log(square2(10));

const test = [1, 2, 3];
const testSquared = test.map((p) => p * p);
console.log(testSquared);
