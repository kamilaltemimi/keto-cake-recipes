import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeListService {

  recipeList: Recipe[] = []

  constructor(
    private http: HttpClient) { }

  url: string = 'https://ciasta-keto-przepisy-default-rtdb.firebaseio.com/recipe-list.json'

  addNewRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.url, recipe);
  }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.url)
  }


  
}
