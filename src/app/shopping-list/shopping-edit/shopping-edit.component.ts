import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredients } from '../../shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('nameInput',{static:false})nameInputRef:ElementRef
  @ViewChild('amountInput',{static:false})amountInputRef:ElementRef
  @Output()ingredientAdded=new EventEmitter<Ingredients>()
  onAddItem(){
    const ingName=this.nameInputRef.nativeElement.value
    const ingAmount=this.amountInputRef.nativeElement.value
   const newIngredient= new Ingredients(ingName,ingAmount);
   this.ingredientAdded.emit(newIngredient)
  }
}
