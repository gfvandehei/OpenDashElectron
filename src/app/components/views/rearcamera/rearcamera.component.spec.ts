import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RearcameraComponent } from './rearcamera.component';

describe('RearcameraComponent', () => {
  let component: RearcameraComponent;
  let fixture: ComponentFixture<RearcameraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RearcameraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RearcameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
