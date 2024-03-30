import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Recipe } from 'src/app/core/models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeListService {

  URL = 'https://ciasta-keto-przepisy-default-rtdb.firebaseio.com/recipe-list.json'

  constructor(
    private http: HttpClient) { }

  addNewRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.URL, recipe);
  }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<{[key: string]: Recipe}>(this.URL).pipe(
    map(data => {
      const responseData: Recipe[] = []
      for (const key in data) {
        const recipe = {...data[key], id:key}
        responseData.push(recipe)
      } 
      return responseData
    }))
  }

  getRecipeById(id: string): Observable<Recipe | undefined>{
    return this.http.get<{[key: string]: Recipe}>(this.URL).pipe(
    map((data: {[key: string]: Recipe}) => {
      let responseData: Recipe | undefined
      for (const key in data){
        if (key === id) {
          responseData = {...data[key], id:key}
        }
      }
      return responseData
    }))
  }

  deleteRecipe(id: string): Observable<void>{
    return this.http.delete<void>(`https://ciasta-keto-przepisy-default-rtdb.firebaseio.com/recipe-list/${id}.json`)
  }

  updateRecipe(currentRecipeId: string, updatedRecipe: Recipe): Observable<Recipe>{
    return this.http.put<Recipe>(`https://ciasta-keto-przepisy-default-rtdb.firebaseio.com/recipe-list/${currentRecipeId}.json`, updatedRecipe)
  }
}
