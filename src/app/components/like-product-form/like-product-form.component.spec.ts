import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeProductFormComponent } from './like-product-form.component';

describe('LikeProductFormComponent', () => {
  let component: LikeProductFormComponent;
  let fixture: ComponentFixture<LikeProductFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeProductFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
