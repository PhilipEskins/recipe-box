import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RECIPES } from '../mock-recipes';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipe = RECIPES;

  // selectedRecipe: Recipe = this.recipe[0];
  finishedEditing() {
  this.selectedRecipe = null;
}
  selectedRecipe = null;

  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }


  // closeDetails() {
  //   this.recipeDetails = null;
  // }
  // recipeDetails = null;
  //
  // showDetails(showRecipe) {
  //   this.recipeDetails = showRecipe;
  // }

  ratingColor(list){
    if (list.rating === "3") {
      return "best";
    } else if (list.rating === "2") {
      return "good";
    } else {
      return "okay";
    }
  }
// click event on h3 needs to change (or toggle) value of showHideDetails from true to false
  showHideDetails(list) {
    if ( true ) {
      return "hide";
  } else {
    return "show";
  }
}

  constructor() { }

  ngOnInit() {
  }
}
