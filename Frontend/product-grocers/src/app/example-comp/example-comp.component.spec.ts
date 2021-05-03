import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleCompComponent } from './example-comp.component';

describe('ExampleCompComponent', () => {
  let component: ExampleCompComponent;
  let fixture: ComponentFixture<ExampleCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
