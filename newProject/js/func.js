// 1Функции
// 2func declaration

/* greet("nui");
// 3func expression
const greet2 = function greet2(name) {
  console.log("Привет 2- ", name);
};
greet2("alesha"); */
/* function greet(name) {
  console.log("Привет - ", name);
} */

/* console.log(typeof greet);
 */
//console.dir(greet2);
// 4Анонимные func
/* let counter = 0;
const interval = setInterval(function () {
  console.log(++counter);
  if (counter === 5) {
    clearInterval(interval);
  }
}, 1000);
 */
// 5 Стрелочные функции
/* function greet(name) {
  console.log("Привет - ", name);
}
const arrow = (name) => {
  console.log("Привет " + name);
};
arrow("Sasha");
const arrow2 = (name) => console.log("Привет " + name);
arrow2("niger");
const pow2 = (num) => {
  return num ** 2;
};
console.log(pow2(5));
//4 Параметры по умолчанию
const sum = (a, b = 2) => a + b;
console.log(sum(243)); */

/* function sumAll(...all) {
  let result = 0;
  for (let num of all) {
    result += num;
  }
  return result;
}
const res = sumAll(2, 3, 4, 5, 7, 7, 7, 7, 7);
console.log(res); */
// Замыкание
/* function createMember(name) {
  return function (lastName) {
    console.log(name + lastName);
  };
}
const LogWithLastName = createMember("Vladik");
console.log(LogWithLastName("ass")); 
 */
