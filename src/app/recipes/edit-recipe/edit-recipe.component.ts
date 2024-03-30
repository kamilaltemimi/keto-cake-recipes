import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/core/models/recipe';
import { RecipeListService } from 'src/app/core/service/recipe-list.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent implements OnInit {

  id!: string; 

  recipe: Recipe = {
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
    private activatedRoute: ActivatedRoute,
    private recipeListService: RecipeListService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id']
    this.getRecipeById(this.id)
  }

  getRecipeById(id: string): void{
    this.recipeListService.getRecipeById(id).subscribe((data?: Recipe) => { 
    if (data) 
      this.recipe = data})
  }

  updateRecipe(): void{
    this.recipeListService.updateRecipe(this.id, this.recipe).subscribe({
      next:() => this.router.navigate(['list']) })
  }
}
