import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <form>
      <h3>Add Meal</h3>
      <label for="food">What did you eat?</label>
      <input type="text" #newFood>
      <label for="details">Details about your meal:</label>
      <input type="text" #newDetails>
      <label for="calories">How many calories where in your meal?</label>
      <input type="number"  #newCalories>
      <button type="button" (click)="submitForm(newFood.value, newDetails.value, newCalories.value); mealFormShow()">Add your meal!</button>
    </form>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  @Output() showMealSender = new EventEmitter();

  submitForm(food: string, details: string, calories: number) {
    var newMeal: Meal = new Meal(food, details, calories);
    this.newMealSender.emit(newMeal);
  }
  showMealBool: boolean = true;
  mealFormShow() {
    this.showMealBool = false;
    this.showMealSender.emit(this.showMealBool);
  }

}
