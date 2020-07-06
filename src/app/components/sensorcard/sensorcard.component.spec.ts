import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorcardComponent } from './sensorcard.component';

describe('SensorcardComponent', () => {
  let component: SensorcardComponent;
  let fixture: ComponentFixture<SensorcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
