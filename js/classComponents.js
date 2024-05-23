const caloriesRemainingEl = document.getElementById("calories-remaining");
const caloriesConsumedEl = document.getElementById("calories-consumed");
const caloriesBurnedEl = document.getElementById("calories-burned");
const limitCaloriesEl = document.getElementById("calories-limit");
const totalCaloriesEl = document.getElementById("calories-total");
const mealItems = document.getElementById("meal-items");

class CalorieTracker {
  constructor() {
    this._calorieLimit = 2000;
    this._totalCalories = 0;
    this._workouts = [];
    this._meals = [];

    this._render();
  }

  addMeal(meal) {
    this._meals.push(meal);
    this._totalCalories += meal.calories;
    this._render();
  }

  addWorkout(workout) {
    this._workouts.push(workout);
    this._totalCalories -= workout.calories;
    this._render();
  }

  resetDailyLimit(limit) {
    this._calorieLimit = limit.daily;
    this._totalCalories = limit.totalCalories;
    this._render();
  }

  _displayCaloriesTotal() {
    totalCaloriesEl.innerHTML = this._totalCalories;
  }

  _displayCaloriesLimit() {
    limitCaloriesEl.innerHTML = this._calorieLimit;
  }

  _displayCaloriesConsumed() {
    const consumed = this._meals.reduce(
      (total, meal) => total + meal.calories,
      0
    );
    caloriesConsumedEl.innerHTML = consumed;
  }

  _displayCaloriesBurned() {
    const burned = this._workouts.reduce(
      (total, workout) => total + workout.calories,
      0
    );

    caloriesBurnedEl.innerHTML = burned;
  }

  _displayCaloriesRemaining() {
    const remaining = this._calorieLimit - this._totalCalories;

    caloriesRemainingEl.innerHTML = remaining;
  }

  _displayMealItems() {
    this._meals.forEach((item) =>
      mealItems.appendChild(mealCard(item.name, item.calories))
    );
  }

  _render() {
    limitCaloriesEl.innerHTML = limit.daily;
    this._displayCaloriesRemaining();
    this._displayCaloriesConsumed();
    this._displayCaloriesBurned();
    this._displayCaloriesTotal();
    this._displayCaloriesLimit();
    this._displayMealItems();
  }
}

class Meal {
  constructor(name, calories) {
    this.id = Math.random().toString(16).slice(2);
    this.name = name;
    this.calories = calories;
  }
}

class Workout {
  constructor(name, calories) {
    this.id = Math.random().toString(16).slice(2);
    this.name = name;
    this.calories = calories;
  }
}

class ResetValues {
  constructor(calories, total) {
    this.id = Math.random().toString(16);
    this.daily = calories;
    this.totalCalories = total;
  }
}
