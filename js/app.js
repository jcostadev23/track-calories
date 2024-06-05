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
    this._loadEventListeners();
  }

  _loadEventListeners() {
    this.dailyLimit.addEventListener("submit", this.setDailyValues);
    this.resetDay.addEventListener("click", this.setDailyValues);
    this.addMealForm.addEventListener("submit", this.addMeal);
    this.addWorkoutForm.addEventListener("submit", this.addWorkout);
    document
      .getElementById("meal-items")
      .addEventListener("click", this._removeItems.bind(this, "meal"));
    document
      .getElementById("workout-items")
      .addEventListener("click", this._removeItems.bind(this, "workout"));
  }

  setDailyValues(e) {
    e.preventDefault();
    const input = document.getElementById("limit");

    if (!input.value) {
      alert("You need to add Calorie Limit");
      return;
    }

    const resetDaily = new ResetValues(input.value, 0);
    this.tracker.resetDailyLimit(resetDaily);

    const modalEl = document.getElementById("limit-modal");
    const modal = bootstrap.Modal.getInstance(modalEl);
    modal.hide();
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

  _removeItems(type, e) {
    if (
      e.target.classList.contains("delete") ||
      e.target.classList.contains("fa-xmark")
    ) {
      if (confirm("Are you sure")) {
        const id = e.target.closest(".card").getAttribute("data-id");
        type === "meal"
          ? this.tracker.removeMeal(id)
          : this.tracker.removeWorkout(id);

        e.target.closest(".card").remove();
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const app = new App();
});
