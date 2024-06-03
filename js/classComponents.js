const caloriesRemainingEl = document.getElementById("calories-remaining");
const caloriesConsumedEl = document.getElementById("calories-consumed");
const caloriesBurnedEl = document.getElementById("calories-burned");
const limitCaloriesEl = document.getElementById("calories-limit");
const totalCaloriesEl = document.getElementById("calories-total");
const progressEl = document.getElementById("calorie-progress");
const mealItems = document.getElementById("meal-items");
const workoutItems = document.getElementById("workout-items");

class ReactCosta {
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  render() {
    console.log("No State a fazer update");
  }
}

class CalorieTracker extends ReactCosta {
  constructor() {
    super();
    this.state = {
      _calorieLimit: 2000,
      _totalCalories: 0,
      _workouts: [],
      _meals: [],
    };
  }

  addMeal(meal) {
    this.setState({
      _meals: [...this.state._meals, meal],
      _totalCalories: (this.state._totalCalories += meal.calories),
    });
  }

  addWorkout(workout) {
    this.setState({
      _workouts: [...this.state._workouts, workout],
      _totalCalories: (this.state._totalCalories -= workout.calories),
    });
  }

  removeMeal(id) {
    const index = this.state._meals.findIndex((meal) => meal.id === id);

    if (index !== -1) {
      const meal = this.state._meals[index];
      this.state._totalCalories -= meal.calories;
      this.state._meals.splice(index, 1);
      this.render();
    }
  }

  removeWorkout(id) {
    const index = this.state._workouts.findIndex(
      (workout) => workout.id === id
    );

    if (index !== -1) {
      const workout = this.state._workouts[index];
      this.state._totalCalories += workout.calories;
      this.state._workouts.splice(index, 1);
      this.render();
    }
  }

  resetDailyLimit(limit) {
    this.setState({
      _calorieLimit: limit.daily,
      _totalCalories: limit.totalCalories,
    });
  }

  _displayCaloriesTotal() {
    totalCaloriesEl.innerHTML = this.state._totalCalories;
  }

  _displayCaloriesLimit() {
    limitCaloriesEl.innerHTML = this.state._calorieLimit;
  }

  _displayCaloriesConsumed() {
    const consumed = this.state._meals.reduce(
      (total, meal) => total + meal.calories,
      0
    );
    caloriesConsumedEl.innerHTML = consumed;
  }

  _displayCaloriesBurned() {
    const burned = this.state._workouts.reduce(
      (total, workout) => total + workout.calories,
      0
    );

    caloriesBurnedEl.innerHTML = burned;
  }

  _displayCaloriesRemaining() {
    const remaining = this.state._calorieLimit - this.state._totalCalories;
    if (remaining <= 0) {
      caloriesRemainingEl.parentElement.parentElement.classList.remove(
        "bg-light"
      );
      caloriesRemainingEl.parentElement.parentElement.classList.add(
        "bg-danger"
      );
      progressEl.classList.remove("bg-success");
      progressEl.classList.add("bg-danger");
    } else {
      caloriesRemainingEl.parentElement.parentElement.classList.remove(
        "bg-danger"
      );
      caloriesRemainingEl.parentElement.parentElement.classList.add("bg-light");
      progressEl.classList.remove("bg-danger");
      progressEl.classList.add("bg-success");
    }
    caloriesRemainingEl.innerHTML = remaining;
  }

  _displayMealItems() {
    mealItems.innerHTML = "";
    this.state._meals.forEach((item, index) =>
      mealItems.appendChild(mealCard(item, item.calories, index))
    );
  }

  _displayWorkoutItems() {
    workoutItems.innerHTML = "";
    this.state._workouts.forEach((item) =>
      workoutItems.appendChild(mealCard(item, item.calories))
    );
  }

  _displayCaloriesProgress() {
    const percentage =
      (this.state._totalCalories / this.state._calorieLimit) * 100;
    const width = Math.min(percentage, 100);
    progressEl.style.width = `${width}%`;
  }

  render() {
    limitCaloriesEl.innerHTML = limit.daily;
    this._displayCaloriesRemaining();
    this._displayCaloriesConsumed();
    this._displayCaloriesBurned();
    this._displayCaloriesTotal();
    this._displayCaloriesLimit();
    this._displayMealItems();
    this._displayCaloriesProgress();
    this._displayWorkoutItems();
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
