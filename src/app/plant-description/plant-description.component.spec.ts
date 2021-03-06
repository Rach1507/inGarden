import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantDescriptionComponent } from './plant-description.component';

describe('PlantDescriptionComponent', () => {
  let component: PlantDescriptionComponent;
  let fixture: ComponentFixture<PlantDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
