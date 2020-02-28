import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSellerCardComponent } from './product-seller-card.component';

describe('ProductSellerCardComponent', () => {
  let component: ProductSellerCardComponent;
  let fixture: ComponentFixture<ProductSellerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSellerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSellerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
