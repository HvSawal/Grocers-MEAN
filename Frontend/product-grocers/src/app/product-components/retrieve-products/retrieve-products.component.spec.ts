import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveProductsComponent } from './retrieve-products.component';

describe('RetrieveProductsComponent', () => {
  let component: RetrieveProductsComponent;
  let fixture: ComponentFixture<RetrieveProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrieveProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
