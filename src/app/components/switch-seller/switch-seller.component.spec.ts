import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchSellerComponent } from './switch-seller.component';

describe('SwitchSellerComponent', () => {
  let component: SwitchSellerComponent;
  let fixture: ComponentFixture<SwitchSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
