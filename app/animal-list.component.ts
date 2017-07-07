import {Component, Input, Output, EventEmitter } from '@angular/core';
import {Animal} from './animal.model';

@Component({
  selector: 'animal-list',
  template:`
    <div>
    <select (change)="onChange($event.target.value)">
      <option value="All">View All Animals</option>
      <option value="2">View All Animals Less Than 2 years Old</option>
      <option value="3">View All Animals More Than 2 years Old</option>
    </select>
      <ul>
        <li *ngFor="let currentAnimal of childAnimalList | age: filterByAge">Species: {{currentAnimal.species}} <br/> Name: {{currentAnimal.name}}
        <button (click)="editAnimalIsClicked(currentAnimal)">Edit!</button>
        </li>
      </ul>
    </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  filterByAge: string = "All";

  onChange(option){
    this.filterByAge = option;
  }

  editAnimalIsClicked(animalToEdit: Animal){
    this.clickSender.emit(animalToEdit);
  }
}
