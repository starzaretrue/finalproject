var mealPlan = {
   Monday: {
       Breakfast: "",
       Snack: "",
       Lunch: "",
       Snack: "",
       Dinner: ""
   },
   Tuesday: {
       Breakfast: "",
       Snack: "",
       Lunch: "",
       Snack: "",
       Dinner: ""
   },
};

function updateMeal(day, meal, value) {
   mealPlan[day][meal] = value;
}
