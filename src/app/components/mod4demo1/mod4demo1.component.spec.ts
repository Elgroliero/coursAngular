import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod4demo1Component } from './mod4demo1.component';

describe('Mod4demo1Component', () => {
  let component: Mod4demo1Component;
  let fixture: ComponentFixture<Mod4demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mod4demo1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Mod4demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
