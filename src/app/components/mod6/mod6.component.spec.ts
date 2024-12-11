import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod6Component } from './mod6.component';

describe('Mod6Component', () => {
  let component: Mod6Component;
  let fixture: ComponentFixture<Mod6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mod6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Mod6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
