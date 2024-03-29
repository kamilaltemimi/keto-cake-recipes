import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { NewRecipeComponent } from './welcome/+components/new-recipe/new-recipe.component';
import { RecipeListComponent } from './welcome/+components/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './welcome/+components/recipe-list/recipe-details/recipe-details.component';
import { EditRecipeComponent } from './welcome/+components/recipe-list/recipe-details/edit-recipe/edit-recipe.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
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
