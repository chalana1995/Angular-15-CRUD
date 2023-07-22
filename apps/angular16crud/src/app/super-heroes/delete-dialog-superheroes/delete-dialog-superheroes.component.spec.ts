import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteDialogSuperheroesComponent } from './delete-dialog-superheroes.component';

describe('DeleteDialogSuperheroesComponent', () => {
  let component: DeleteDialogSuperheroesComponent;
  let fixture: ComponentFixture<DeleteDialogSuperheroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteDialogSuperheroesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteDialogSuperheroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
