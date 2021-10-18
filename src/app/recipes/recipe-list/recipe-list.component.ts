import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [new Recipe('Hot Chocolate Coffee', 'My hot chocolate recipe collection is growing fast and furiously thanks to the awesome Hot Chocolate Extravaganza that I’m running on my blog these days.', 'https://res.cloudinary.com/jscodebit/image/upload/v1528372377/central-coffee/coffee.jpg'),
  new Recipe('Hot Chocolate Coffee', 'My hot chocolate recipe collection is growing fast and furiously thanks to the awesome Hot Chocolate Extravaganza that I’m running on my blog these days.', 'https://res.cloudinary.com/jscodebit/image/upload/v1528372377/central-coffee/coffee.jpg')];

  constructor() { }

  ngOnInit(): void {
  }

}
