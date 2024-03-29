import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from '../welcome.component';
import { NewRecipeComponent } from '../+components/new-recipe/new-recipe.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { RecipeListModule } from '../+components/recipe-list/recipe-list-module/recipe-list.module';

@NgModule({
  declarations: [
    WelcomeComponent,
    NewRecipeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RecipeListModule
  ],
  providers:[
  ]
})
export class MainModule { }
