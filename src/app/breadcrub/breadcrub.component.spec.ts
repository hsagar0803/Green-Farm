import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrubComponent } from './breadcrub.component';

describe('BreadcrubComponent', () => {
  let component: BreadcrubComponent;
  let fixture: ComponentFixture<BreadcrubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
