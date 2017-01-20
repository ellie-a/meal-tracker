import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <div class="row meals" *ngFor="let newMeal of childMealList">
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
}
