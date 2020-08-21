const cars = ["ford", "mazda", "mba", "miger"];
const fib = [1, 1, 2, , 3, 5, 6, 13, "123", true];
const people = [
  { name: "Vlad", budget: 4200 },
  { name: "safad", budget: 23200 },
  { name: "alex", budget: 5600 },
];
//Method
/* cars.push("ass");
console.log(cars);
cars.unshift("First");
console.log(cars);
const firstitem = cars.shift();
cars.unshift(firstitem);
console.log(cars);
const lastCar = cars.pop();
console.log(cars);
cars.push(lastCar);
console.log(cars.reverse());
console.log(cars);
// Задача
const str = "Привет, мы изучаем js";
const reverseText = str.split("").reverse().join("");
console.log(reverseText); */
const index = cars.indexOf("mba");
const index2 = people.findIndex(function (person) {
  return person.budget === 23200;
});
console.log(people[index2]);
