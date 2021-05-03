import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTicketComponent } from './employee-ticket.component';

describe('EmployeeTicketComponent', () => {
  let component: EmployeeTicketComponent;
  let fixture: ComponentFixture<EmployeeTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
