import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RecipeListService } from 'src/app/core/service/recipe-list.service';

@Component({
  selector: 'app-delete-recipe',
  templateUrl: './delete-recipe.component.html',
  styleUrls: ['./delete-recipe.component.scss']
})
export class DeleteRecipeComponent {

  title: string = this.data.title

  constructor(
    public dialogRef: MatDialogRef<DeleteRecipeComponent>,
    private recipeListService: RecipeListService,
    private router: Router,
    @Inject (MAT_DIALOG_DATA) public data: {id: string, title: string}
  ){}

    deleteRecipeById(){
      this.recipeListService.deleteRecipe(this.data.id).subscribe({
        next:() =>  this.router.navigate(['list'])
      })
    }

}
