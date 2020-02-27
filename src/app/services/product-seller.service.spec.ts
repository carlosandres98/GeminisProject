import { TestBed } from '@angular/core/testing';

import { ProductSellerService } from './product-seller.service';

describe('ProductSellerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductSellerService = TestBed.get(ProductSellerService);
    expect(service).toBeTruthy();
  });
});
