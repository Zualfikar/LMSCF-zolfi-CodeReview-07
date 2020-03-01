import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelDescriptionComponent } from './travel-description.component';

describe('TravelDescriptionComponent', () => {
  let component: TravelDescriptionComponent;
  let fixture: ComponentFixture<TravelDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
