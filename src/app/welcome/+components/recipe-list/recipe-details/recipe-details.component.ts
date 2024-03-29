import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { RecipeListService } from 'src/app/core/service/recipe-list.service';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent {

  recipe: Recipe | undefined  = {
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

  constructor (
    private router: Router,
    private recipeListService: RecipeListService,
    private activatedRoute: ActivatedRoute
  ){
    this.getSelectedRecipe()
  }

  getSelectedRecipe(): void{
    this.recipeListService.getRecipes().pipe(map((data: Recipe[]) => {
      let responseData: Recipe | undefined
      let id = this.activatedRoute.snapshot.params['id']
      for (const key in data)
      if (key === id) {
        responseData = data[key]
      }
        return responseData
    })).subscribe((data: Recipe | undefined) => this.recipe = data)
  }

  navigate(): void{
    let id = this.activatedRoute.snapshot.params['id'] 
    this.router.navigate([`list/details/${id}/edit`])
  }

}
