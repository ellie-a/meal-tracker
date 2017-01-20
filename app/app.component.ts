import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <meal-list [childMealList]="masterMealList"></meal-list>
    <button class="btn" (click)="mealFormShow()">Add A New Meal</button>
    <new-meal *ngIf="showMeal" class="newmeal" (newMealSender)="newMeal($event)" (showMealSender)="mealFormHide($event)"></new-meal>

  </div>
   `
})

export class AppComponent {
  masterMealList: Meal[] = [
    new Meal("Smoothie", "Added protien powder!", 90),
    new Meal("Fries", "Didn't have a side of ranch", 300),
    new Meal("Snickers", "Only had one", 215)
  ];

  newMeal(newMealFromChild: Meal) {
      this.masterMealList.push(newMealFromChild);
    }
    showMeal: boolean = false;
    mealFormShow() {
      this.showMeal = true;
    }
    mealFormHide(mealBool: boolean) {
      this.showMeal = mealBool;
    }
}
