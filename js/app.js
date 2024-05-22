const dailyLimit = document.getElementById("limit-form");
const input = document.getElementById("limit");
const resetDay = document.getElementById("reset");

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

dailyLimit.addEventListener("submit", setDailyValues);
resetDay.addEventListener("click", setDailyValues);
