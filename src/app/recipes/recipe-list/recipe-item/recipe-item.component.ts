import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
   @Output()recipeSelected = new EventEmitter<void>()
   @Input()recipe:Recipe;
   OnSelected(data){
     this.recipeSelected.emit();
   }
}
