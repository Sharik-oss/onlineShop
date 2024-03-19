import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingLocationsComponent } from './creating-locations.component';

describe('CreatingLocationsComponent', () => {
  let component: CreatingLocationsComponent;
  let fixture: ComponentFixture<CreatingLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatingLocationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatingLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
