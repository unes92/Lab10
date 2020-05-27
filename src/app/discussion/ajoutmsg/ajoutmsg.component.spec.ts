import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutmsgComponent } from './ajoutmsg.component';

describe('AjoutmsgComponent', () => {
  let component: AjoutmsgComponent;
  let fixture: ComponentFixture<AjoutmsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutmsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutmsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
