import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoingComponent } from './going.component';

describe('GoingComponent', () => {
  let component: GoingComponent;
  let fixture: ComponentFixture<GoingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
