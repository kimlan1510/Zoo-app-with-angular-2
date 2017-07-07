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
    <p></p>
      <ul>
        <li *ngFor="let currentAnimal of childAnimalList | age: filterByAge" [class]="endangeredSpecies(currentAnimal)"> <strong>Species:</strong> {{currentAnimal.species}}<br/> <strong>Name:</strong>  {{currentAnimal.name}} <br/>
        <strong>Age: </strong>{{currentAnimal.age}} <br/>
        <strong>Diet: </strong>{{currentAnimal.diet}} <br/>
        <strong>Location: </strong> {{currentAnimal.location}} <br/>
        <strong>Caretakers: </strong>{{currentAnimal.careTakers}} <br/>
        <strong>Sex: </strong>{{currentAnimal.sex}} <br/>
        <strong>Likes: </strong>{{currentAnimal.likes}} <br/>
        <strong>Dislikes: </strong>{{currentAnimal.dislikes}} <br/>
        <strong>Endangered Species? </strong>{{isEndangered}}<br/>
        <button (click)="editAnimalIsClicked(currentAnimal)">Edit!</button>
        <hr/>
        </li>
      </ul>
    </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  filterByAge: string = "All";
  isEndangered: string;
  onChange(option){
    this.filterByAge = option;
  }

  editAnimalIsClicked(animalToEdit: Animal){
    this.clickSender.emit(animalToEdit);
  }

  endangeredSpecies(selectedAnimal){
    if(selectedAnimal.endangered === true){
      this.isEndangered = "Yes!";
      return "bg-danger";
    }
    else{
      this.isEndangered = "No. Not yet!";
      return "bg-info";
    }
  }
}
