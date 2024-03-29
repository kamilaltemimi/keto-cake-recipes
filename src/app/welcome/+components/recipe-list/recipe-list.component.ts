import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { RecipeListService } from 'src/app/core/service/recipe-list.service';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {

recipeList: Recipe[] = []

constructor(
  private recipeListService: RecipeListService,
  private router: Router
){
  this.getRecipes()
}

getRecipes(): void {
  this.recipeListService.getRecipes()
    .pipe(map(data => {
      const responseData: Recipe[] = []
      for (const key in data) {
        responseData.push({...data[key], id:key})
      } 
      return responseData
    }))
    .subscribe(data => this.recipeList = data)  
}

navigate(recipe: Recipe){
  this.router.navigate([`list/details/${recipe.id}`])
}

}
