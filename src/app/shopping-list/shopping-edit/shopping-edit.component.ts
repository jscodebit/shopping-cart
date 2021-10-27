import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') name : ElementRef;
  @ViewChild('amountInput') amount : ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }
  newIngredientAdded(event: Event){
    event.preventDefault();
    //console.log(this.name.nativeElement.value, this.amount.nativeElement.value);
    this.ingredientAdded.emit(new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value));
  }

}
