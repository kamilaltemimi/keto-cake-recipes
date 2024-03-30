import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesHomeComponent } from './recipes/recipes-home.component';
import { NewRecipeComponent } from './recipes/new-recipe/new-recipe.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';

const routes: Routes = [
  {path: '', component: RecipesHomeComponent},
  {path: 'new', component: NewRecipeComponent},
  {path: 'list', component: RecipeListComponent},
  {path: 'list/details/:id', component: RecipeDetailsComponent},
  {path: 'list/details/:id/edit', component: EditRecipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
