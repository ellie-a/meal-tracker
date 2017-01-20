import { Component, Input } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <div class="row">
    <div class="col m6 meals" *ngFor="let newMeal of childMealList">
      {{newMeal.food}}<br>{{newMeal.details}}<br>{{newMeal.calories}}
    </div>
  </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
}
