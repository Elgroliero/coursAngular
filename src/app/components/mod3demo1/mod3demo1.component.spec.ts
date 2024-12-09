import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod3demo1Component } from './mod3demo1.component';

describe('Mod3demo1Component', () => {
  let component: Mod3demo1Component;
  let fixture: ComponentFixture<Mod3demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mod3demo1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Mod3demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
