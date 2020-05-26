import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterparticipantComponent } from './ajouterparticipant.component';

describe('AjouterparticipantComponent', () => {
  let component: AjouterparticipantComponent;
  let fixture: ComponentFixture<AjouterparticipantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterparticipantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterparticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
