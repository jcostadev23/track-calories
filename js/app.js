const dailyLimit = document.getElementById("limit-form");
const input = document.getElementById("limit");
const resetDay = document.getElementById("reset");
const addMealForm = document.getElementById("meal-form");

const tracker = new CalorieTracker();

const breakfast = new Meal("Breakfast", 400);
const lunch = new Meal("Lunch", 500);
tracker.addMeal(breakfast);
tracker.addMeal(lunch);

const run = new Workout("Morning run", 330);
tracker.addWorkout(run);

function setDailyValues(e) {
  e.preventDefault();

  const resetDaily = new ResetValues(input.value, 0);
  tracker.resetDailyLimit(resetDaily);
}

function addMeal(e) {
  e.preventDefault();
  const meal = document.getElementById("meal-name");
  const calory = document.getElementById("meal-calories");

  const addMeal = new Meal(meal.value, calory.value);
  tracker.addMeal(addMeal);
  meal.value = "";
  calory.value = "";
}

dailyLimit.addEventListener("submit", setDailyValues);
resetDay.addEventListener("click", setDailyValues);
addMealForm.addEventListener("submit", addMeal);
