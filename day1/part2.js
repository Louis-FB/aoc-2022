import { readFileSync } from "node:fs";

const data = readFileSync("../data/input1.txt", { encoding: "utf-8" })
  .trim()
  .split("\n\n");

const groupedCalories = [];

const loop = () => {
  for (let i = 0; i < data.length; i++) {
    let meal = data[i].split("\n");
    let elfTotal = [];
    meal.forEach((m) => {
      elfTotal.push(parseInt(m));
    });
    groupedCalories.push(elfTotal.reduce((acc, cur) => acc + cur));
  }
  const sortedNumbers = groupedCalories.sort((a, b) => b - a);
  const topThree = sortedNumbers.slice(0, 3);
  console.log(topThree.reduce((acc, cur) => acc + cur));
};
loop();
