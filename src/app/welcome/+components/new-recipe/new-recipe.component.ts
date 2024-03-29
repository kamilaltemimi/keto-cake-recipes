import { Recipe } from 'src/app/models/recipe';
import { RecipeListService } from 'src/app/core/service/recipe-list.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss']
})
export class NewRecipeComponent {

  newRecipe: Recipe = {
  title: undefined,
  description: undefined,
  instruction: undefined,
  preparationTimeHours: undefined,
  preparationTimeMinutes: undefined,
  imageUrl: undefined,
  nutritionInfo: {
    protein: undefined,
    fat: undefined,
    carbs: undefined, 
    calories: undefined, 
    fiber: undefined, 
    sugar: undefined 
  },
  isVegetarian: undefined,
  isDairyFree: undefined 
}
  
  constructor(
    private recipeListService: RecipeListService
  ){}

    addNewRecipe(recipe: Recipe): void{
      this.recipeListService.addNewRecipe(recipe).subscribe()
    }

}
