import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcontainerComponent } from './viewcontainer.component';

describe('ViewcontainerComponent', () => {
  let component: ViewcontainerComponent;
  let fixture: ComponentFixture<ViewcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
