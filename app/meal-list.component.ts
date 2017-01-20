import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <select class="dropDown" (change)="onChange($event.target.value)" >
    <option value="all" selected="selected">All Meals</option>
    <option value="lowCalories">My low calories meals</option>
    <option value="highCalories">My high calories meals</option>
  </select>
  <div class="row meals" *ngFor="let newMeal of childMealList | calories:filterByCalories ">
    <div class="col m6" >
      {{newMeal.food}}<br>{{newMeal.details}}<br>{{newMeal.calories}}
    </div>
    <div class="col m4">
      <button class="btn" (click)="editButtonHasBeenClicked(newMeal)">Edit Meal</button>
  </div>
  </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }

  filterByCalories: string = "all";

  onChange(optionFromMenu) {
    this.filterByCalories = optionFromMenu;
  }
}
