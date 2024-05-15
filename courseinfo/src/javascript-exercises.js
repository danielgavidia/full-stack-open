// const vs let
const x = 1;
let y = 5;

console.log(x, y);
y += 10;
console.log(x, y);
y = "sometext";
console.log(x, y);
// x = 4; // throws an error

// arrays
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

const arr = [1, -1, 3];
const arr2 = arr.concat(5);
console.log(arr);
console.log(arr2);

const arr3 = [1, 2, 3];
const arr4 = arr3.map((value) => value * 2);
console.log(arr4);
