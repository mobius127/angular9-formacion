import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarShptsComponent } from './star-shpts.component';

describe('StarShptsComponent', () => {
  let component: StarShptsComponent;
  let fixture: ComponentFixture<StarShptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarShptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarShptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
