import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from '../recipe-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { RecipeDetailsComponent } from '../recipe-details/recipe-details.component';
import { EditRecipeComponent } from '../recipe-details/edit-recipe/edit-recipe.component';

@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeDetailsComponent,
    EditRecipeComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    SharedModule
  ]
})
export class RecipeListModule { }
