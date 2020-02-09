import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOfertComponent } from './product-ofert.component';

describe('ProductOfertComponent', () => {
  let component: ProductOfertComponent;
  let fixture: ComponentFixture<ProductOfertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductOfertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOfertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
