import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactenComponent } from './contacten.component';

describe('ContactenComponent', () => {
  let component: ContactenComponent;
  let fixture: ComponentFixture<ContactenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
