import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddSuperheroesComponent } from './add-superheroes.component';

describe('AddSuperheroesComponent', () => {
  let component: AddSuperheroesComponent;
  let fixture: ComponentFixture<AddSuperheroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddSuperheroesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddSuperheroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
