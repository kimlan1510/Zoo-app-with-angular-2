import { Component } from '@angular/core';
import (Animal) from './animal.model';

@Component({
  selector: 'app-root',
  template:`
    <div class="container">
      <h3>{{currentFocus}}</h3>
    </div>
  `
})

export class AppComponent{
  currentFocus: string = "Zoolandia";
}
