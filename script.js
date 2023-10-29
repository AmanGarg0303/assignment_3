import foods from "./food.json" assert { type: "json" };

// List all the food items
const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function () {
  const allItems = foods.map((food) => food.foodname);
  console.log(allItems);
});

////////////////////////////////////////////////////////////////////////////

// List all food items with category
const foodWithCat = (cat) => {
  return foods.filter((food) => food.category === cat);
};

const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function () {
  console.log(foodWithCat("Vegetable"));
});

const btn3 = document.getElementById("btn3");
btn3.addEventListener("click", function () {
  console.log(foodWithCat("Fruit"));
});

const btn4 = document.getElementById("btn4");
btn4.addEventListener("click", function () {
  console.log(foodWithCat("Protein"));
});

const btn5 = document.getElementById("btn5");
btn5.addEventListener("click", function () {
  console.log(foodWithCat("Nuts"));
});

const btn6 = document.getElementById("btn6");
btn6.addEventListener("click", function () {
  console.log(foodWithCat("Grain"));
});

const btn7 = document.getElementById("btn7");
btn7.addEventListener("click", function () {
  console.log(foodWithCat("Dairy"));
});

////////////////////////////////////////////////////////////////////////////

// List all food items with calorie above 100
const calorieAbove100 = foods.filter((food) => food.calorie > 100);
const btn8 = document.getElementById("btn8");
btn8.addEventListener("click", function () {
  console.log(calorieAbove100);
});

// List all food items with calorie above 100
const calorieBelow100 = foods.filter((food) => food.calorie < 100);
const btn9 = document.getElementById("btn9");
btn9.addEventListener("click", function () {
  console.log(calorieBelow100);
});

////////////////////////////////////////////////////////////////////////////

// List all food items with highest to lowest protein content
const btn10 = document.getElementById("btn10");
btn10.addEventListener("click", function () {
  console.log(
    foods.sort(function (a, b) {
      return b.protiens - a.protiens;
    })
  );
});

// List all food items with lowest to higest carb content
const btn11 = document.getElementById("btn11");
btn11.addEventListener("click", function () {
  console.log(
    foods.sort(function (a, b) {
      return a.cab - b.cab;
    })
  );
});
