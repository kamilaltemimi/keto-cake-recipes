import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { RecipeListService } from 'src/app/core/service/recipe-list.service';
import { Recipe } from 'src/app/core/models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

recipeList: Recipe[] | any[] = []

constructor(
  private recipeListService: RecipeListService,
  private router: Router
){}

ngOnInit(): void {
  this.getRecipes();
}

getRecipes(): void {
  this.recipeListService.getRecipes().subscribe(data => this.recipeList = data)  
}

navigate(recipe: Recipe): void{
  this.router.navigate([`list/details/${recipe.id}`])
}

}
