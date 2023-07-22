import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllSuperheroesComponent } from './all-superheroes.component';

describe('AllSuperheroesComponent', () => {
  let component: AllSuperheroesComponent;
  let fixture: ComponentFixture<AllSuperheroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllSuperheroesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AllSuperheroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
