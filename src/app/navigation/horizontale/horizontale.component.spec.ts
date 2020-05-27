import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontaleComponent } from './horizontale.component';

describe('HorizontaleComponent', () => {
  let component: HorizontaleComponent;
  let fixture: ComponentFixture<HorizontaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
