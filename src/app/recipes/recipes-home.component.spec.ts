import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesHomeComponent } from './recipes-home.component';

describe('WelcomeComponent', () => {
  let component: RecipesHomeComponent;
  let fixture: ComponentFixture<RecipesHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipesHomeComponent]
    });
    fixture = TestBed.createComponent(RecipesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
