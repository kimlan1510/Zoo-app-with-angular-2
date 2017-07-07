import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template:`
  <div *ngIf="childSelectedAnimal">
    <h3>Name: {{childSelectedAnimal.name}}</h3>
    <h3>Age: {{childSelectedAnimal.age}}</h3>
    <h3>Number of Caretakers: {{childSelectedAnimal.careTakers}}</h3>

    <h2>Edit Animal</h2>
    <label>Change Animal Name:</label>
    <input [(ngModel)]="childSelectedAnimal.name"><br/>
    <label>Change Animal Age</label>
    <input [(ngModel)]="childSelectedAnimal.age"><br/>
    <label>Change Animal's Number of Caretakers</label>
    <input [(ngModel)]="childSelectedAnimal.careTakers"><br/>
    <button (click)="buttonFinishedEditing()">Done</button>
  </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() finishedEditingSender = new EventEmitter();

  buttonFinishedEditing(){
    console.log("hi");
    this.finishedEditingSender.emit();
  }
}
