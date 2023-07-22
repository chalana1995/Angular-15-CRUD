import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditSuperheroesComponent } from './edit-superheroes.component';

describe('EditSuperheroesComponent', () => {
  let component: EditSuperheroesComponent;
  let fixture: ComponentFixture<EditSuperheroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditSuperheroesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditSuperheroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
