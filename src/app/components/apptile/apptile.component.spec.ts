import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApptileComponent } from './apptile.component';

describe('ApptileComponent', () => {
  let component: ApptileComponent;
  let fixture: ComponentFixture<ApptileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApptileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApptileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
