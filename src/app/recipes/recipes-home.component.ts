import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './recipes-home.component.html',
  styleUrls: ['./recipes-home.component.scss']
})
export class RecipesHomeComponent {

  constructor(
    private router: Router){}

  navigateTo(){
    this.router.navigate(['list'])
  }
}
