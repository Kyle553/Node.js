#!/usr/bin/env node

if (process.argv.length < 5) {
  console.error(process.argv, "Потрібно:\nnode <назва-файлу> <число> <оператор> <число>");
  process.exit(1);
}

const arg = process.argv.slice(2);
arg[0] = Number(arg[0]);
arg[2] = Number(arg[2]);

let result = "";


switch(arg[1]) {
  case "+":
    result = arg[0] + arg[2];
    break;
  case "-":
    result = arg[0] - arg[2];
    break;
  case "*":
    result = arg[0] * arg[2];
    break;
  case "/":
    result = arg[0] / arg[2];
    break;
  default:
    console.log("Невідомий оператор\nДоступні: +, -, /, *");
}

if (!Number.isInteger(result)) {
  console.log(result.toFixed(2));
  process.exit(0);
}

console.log(result);
