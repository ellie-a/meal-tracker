import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <meal-list [childMealList]="masterMealList"></meal-list>
  </div>
   `
})

export class AppComponent {
  masterMealList: Meal[] = [
    new Meal("Smoothie", "Added protien powder!", 90),
    new Meal("Fries", "Didn't have a side of ranch", 300),
    new Meal("Snickers", "Only had one", 215)
  ];
}
