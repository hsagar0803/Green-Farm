import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RagisterFormComponent } from './ragister-form.component';

describe('RagisterFormComponent', () => {
  let component: RagisterFormComponent;
  let fixture: ComponentFixture<RagisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RagisterFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RagisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
