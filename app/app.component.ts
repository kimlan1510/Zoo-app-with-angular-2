import { Component } from '@angular/core';
import { Animal }from './animal.model' ;

@Component({
  selector: 'app-root',
  template:`
    <div class="container">
      <h3>{{currentFocus}}</h3>
    </div>
    <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
    <edit-animal [childSelectedAnimal]="masterSelectedAnimal" (finishedEditingSender)="finishedEditing()"></edit-animal>
    <new-animal (newAnimalSender)="addNewAnimal($event)"></new-animal>
  `
})

export class AppComponent{
  currentFocus: string = "Zoolandia";
  masterAnimalList: Animal[] = [
    new Animal("Artic Fox", "Moon", 2, "Carnivore", "Northern Trail", 5, "Female", "Cool shade", "Loud noise", false),
    new Animal("Ocelot", "Prince", 4, "Carnivore", "Tropical Rain Forest Building", 6, "Male", "Laying in the sunshine", "Toys that are not rope-base", false),
    new Animal("Northen Black Tail Deer", "Tinkerbell", 8, "Herbivore", "Northen Trail", 2, "Female", "delicate roots and leaves", "Loud noise", true)
  ]

  masterSelectedAnimal: Animal = null;

  editAnimal(clickedAnimal) {
    this.masterSelectedAnimal = clickedAnimal;
  }

  finishedEditing(){
    this.masterSelectedAnimal = null;
  }

  addNewAnimal(newAnimalFromChild: Animal){
    this.masterAnimalList.push(newAnimalFromChild);
  }


}
