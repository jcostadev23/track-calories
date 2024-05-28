class App {
  constructor() {
    this.dailyLimit = document.getElementById("limit-form");
    this.addMealForm = document.getElementById("meal-form");
    this.resetDay = document.getElementById("reset");
    this.addWorkoutForm = document.getElementById("workout-form");

    this.tracker = new CalorieTracker();
    this.addMeal = this.addMeal.bind(this);
    this.setDailyValues = this.setDailyValues.bind(this);
    this.addWorkout = this.addWorkout.bind(this);

    this.dailyLimit.addEventListener("submit", this.setDailyValues);
    this.resetDay.addEventListener("click", this.setDailyValues);
    this.addMealForm.addEventListener("submit", this.addMeal);
    this.addWorkoutForm.addEventListener("submit", this.addWorkout);
  }

  setDailyValues(e) {
    e.preventDefault();
    const input = document.getElementById("limit");

    if (!input.value) {
      return alert("You need to add Calorie Limit");
    }

    const resetDaily = new ResetValues(input.value, 0);
    this.tracker.resetDailyLimit(resetDaily);
    input.value = 0;
  }

  addMeal(e) {
    e.preventDefault();
    const meal = document.getElementById("meal-name");
    const calory = document.getElementById("meal-calories");

    if (!meal.value || !calory.value) {
      return alert("Need to Fill all the sections");
    }

    const addMeal = new Meal(
      meal.value[0].toUpperCase() + meal.value.slice(1),
      parseInt(calory.value)
    );
    this.tracker.addMeal(addMeal);
    meal.value = "";
    calory.value = "";
  }

  addWorkout(e) {
    e.preventDefault();
    const workout = document.getElementById("workout-name");
    const calory = document.getElementById("workout-calories");

    if (!workout.value || !calory.value) {
      return alert("Need to Fill all the sections");
    }

    const addWorkout = new Workout(
      workout.value[0].toUpperCase() + workout.value.slice(1),
      parseInt(calory.value)
    );
    this.tracker.addWorkout(addWorkout);
    workout.value = "";
    calory.value = "";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const app = new App();
});
