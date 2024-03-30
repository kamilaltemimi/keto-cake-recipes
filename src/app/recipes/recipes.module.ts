import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesHomeComponent } from './recipes-home.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DeleteRecipeComponent } from './delete-recipe/delete-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';


@NgModule({
  declarations: [
    RecipesHomeComponent,
    NewRecipeComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    DeleteRecipeComponent,
    EditRecipeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatGridListModule,
    MatDialogModule
  ],
  providers:[
  ]
})
export class RecipesModule { }
