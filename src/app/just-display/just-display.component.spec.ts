import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustDisplayComponent } from './just-display.component';

describe('JustDisplayComponent', () => {
  let component: JustDisplayComponent;
  let fixture: ComponentFixture<JustDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JustDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JustDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
