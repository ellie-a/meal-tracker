import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <meal-list [childMealList]="masterMealList" (clickSender)="editMeal($event)"></meal-list>
    <hr>
    <edit-meal [childSelectedMeal]="selectedMeal" (doneClickedSender)="editDone()"></edit-meal>
    <br>
    <button class="btn" (click)="mealFormShow()">Add A New Meal</button>
    <new-meal *ngIf="showMeal" class="newmeal" (newMealSender)="newMeal($event)" (showMealSender)="mealFormHide($event)"></new-meal>

  </div>
   `
})

export class AppComponent {
  masterMealList: Meal[] = [
    new Meal("Smoothie", "Added protien powder!", 90),
    new Meal("Fries", "Didn't have a side of ranch", 550),
    new Meal("CrunchWrap", "Cheat Day", 700),
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

    selectedMeal = null;
    editMeal(clickedMeal) {
      this.selectedMeal = clickedMeal;
    }
    editDone() {
      this.selectedMeal = null;
    }
}
