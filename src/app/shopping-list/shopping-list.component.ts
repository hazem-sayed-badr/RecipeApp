import { Component } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
 ingredients:Ingredients[]=[
  new Ingredients("Tomatoes",10),
  new Ingredients("Apples",5),
 ]
 AddIngredients(Ingredient:Ingredients){
     this.ingredients.push(Ingredient)
 }
}
