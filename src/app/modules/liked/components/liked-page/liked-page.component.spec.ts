import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedPageComponent } from './liked-page.component';

describe('LikedPageComponent', () => {
  let component: LikedPageComponent;
  let fixture: ComponentFixture<LikedPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LikedPageComponent]
    });
    fixture = TestBed.createComponent(LikedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
