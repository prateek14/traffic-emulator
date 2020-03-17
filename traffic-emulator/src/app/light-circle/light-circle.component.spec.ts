import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightCircleComponent } from './light-circle.component';

describe('LightCircleComponent', () => {
  let component: LightCircleComponent;
  let fixture: ComponentFixture<LightCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
