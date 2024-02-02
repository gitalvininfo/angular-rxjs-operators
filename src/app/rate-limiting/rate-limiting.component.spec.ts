import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateLimitingComponent } from './rate-limiting.component';

describe('RateLimitingComponent', () => {
  let component: RateLimitingComponent;
  let fixture: ComponentFixture<RateLimitingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateLimitingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateLimitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
