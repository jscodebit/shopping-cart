import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes : Recipe[] = [
    new Recipe('Hot Chocolate Coffee', 'My hot chocolate recipe collection is growing fast and furiously thanks to the awesome Hot Chocolate Extravaganza that I’m running on my blog these days.', 'https://res.cloudinary.com/jscodebit/image/upload/v1528372377/central-coffee/coffee.jpg'),
    new Recipe('Black and White Hot Cocoa', 'Steamed milk and mocha sauce topped with sweetened whipped cream and a chocolate-flavored drizzle. A timeless classic made to sweeten your spirits.', 'https://res.cloudinary.com/jscodebit/image/upload/v1528372377/central-coffee/coffee.jpg')
  ];


  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
