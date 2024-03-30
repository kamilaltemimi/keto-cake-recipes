import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { RecipeListService } from 'src/app/core/service/recipe-list.service';
import { Recipe } from 'src/app/core/models/recipe';
import { MatDialog } from '@angular/material/dialog';
import { DeleteRecipeComponent } from '../delete-recipe/delete-recipe.component';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  recipe: Recipe | undefined  = {
    id: undefined,
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

  id = this.activatedRoute.snapshot.params['id']

  constructor (
    private router: Router,
    private recipeListService: RecipeListService,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog) 
    {}

  ngOnInit(): void {
    this.getActiveRecipe()
  }

  getActiveRecipe(): void{
    this.recipeListService.getRecipeById(this.id).pipe(take(1)).subscribe((data: Recipe | undefined) => this.recipe = data)
  }

  navigate(id: string | undefined): void{
    if (!id) {
      return
    }
    this.router.navigate([`list/details/${id}/edit`])
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, id?: string, title?: string): void {
    this.dialog.open(DeleteRecipeComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {id: id, title: title}
    });
  }

}
