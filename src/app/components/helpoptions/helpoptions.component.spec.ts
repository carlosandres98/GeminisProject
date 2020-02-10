import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpoptionsComponent } from './helpoptions.component';

describe('HelpoptionsComponent', () => {
  let component: HelpoptionsComponent;
  let fixture: ComponentFixture<HelpoptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpoptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
