import { Component } from '@angular/core';
import { RecipeListService } from 'src/app/core/service/recipe-list.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent {


  constructor(
    private recipeListService: RecipeListService
  ){}

  getSelectedRecipe(){
    
  }

}
