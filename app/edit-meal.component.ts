import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
  <div *ngIf="childSelectedMeal">
    <h4>Edit Meal</h4>
    <label>What did you eat?</label>
    <input [(ngModel)]="childSelectedMeal.food">
    <label>Details about your meal:</label>
    <input [(ngModel)]="childSelectedMeal.details">
    <label>How many calories where in your meal?</label>
    <input [(ngModel)]="childSelectedMeal.calories">
    <button (click)="doneButtonClicked()">Done</button>
  </div>
  `
})

export class EditMealComponent {
  @Output() doneClickedSender = new EventEmitter;
  @Input() childSelectedMeal: Meal;

  doneButtonClicked() {
    this.doneClickedSender.emit();
  }

}
