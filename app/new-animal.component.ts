import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template:`
    <button (click)="addAnimalForm()">Add a new animal</button>
    <div *ngIf="addAnimal">
      <h2>Add A New Animal</h2>
      <form>
        <label>Enter Species:</label>
        <input #newAnimalSpecies> <br/>
        <label>Enter Name</label>
        <input #newAnimalName><br/>
        <label>Enter Age</label>
        <input #newAnimalAge><br/>
        <label>Enter Diet</label>
        <input #newAnimalDiet><br/>
        <label>Enter Location</label>
        <input #newAnimalLocation><br/>
        <label>Enter Caretakers</label>
        <input #newAnimalCaretakers><br/>
        <label>Enter Likes</label>
        <input #newAnimalLikes><br/>
        <label>Enter Dislikes</label>
        <input #newAnimalDislikes><br/>
        <label>Enter Sex</label>
        <select #newAnimalSex>
          <option> Male </option>
          <option> Female </option>
        </select><br/>
        <label>Endangered Species?</label>
        <select #newAnimalStatus>
          <option> Is an endangered species </option>
          <option> not an endangered species </option>
        </select><br/>
        <button type="button" (click)="submitForm(newAnimalSpecies.value, newAnimalName.value, newAnimalAge.value, newAnimalDiet.value, newAnimalLocation.value, newAnimalCaretakers.value, newAnimalSex.value, newAnimalLikes.value, newAnimalDislikes.value, newAnimalStatus.value)">Add Animal</button>
      </form>
    </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();
  addAnimal: boolean = false;



  submitForm(species: string, name: string, age: number, diet: string, location: string, careTakers: number, sex: string, likes: string, dislikes: string, endangered: string){
    var status: boolean;
    if(endangered === "Is an endangered species"){
      status = true;
    }
    else{
      status = false;
    }
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, careTakers, sex, likes, dislikes, status);
    this.newAnimalSender.emit(newAnimalToAdd);
    this.addAnimal = false;
  }

  addAnimalForm(){
    this.addAnimal = true;
  }
}
