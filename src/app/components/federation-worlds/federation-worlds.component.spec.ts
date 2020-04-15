import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FederationWorldsComponent } from './federation-worlds.component';

describe('FederationWorldsComponent', () => {
  let component: FederationWorldsComponent;
  let fixture: ComponentFixture<FederationWorldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FederationWorldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FederationWorldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
