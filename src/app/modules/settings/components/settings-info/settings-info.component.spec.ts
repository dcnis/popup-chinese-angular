import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsInfoComponent } from './settings-info.component';

describe('SettingsInfoComponent', () => {
  let component: SettingsInfoComponent;
  let fixture: ComponentFixture<SettingsInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsInfoComponent]
    });
    fixture = TestBed.createComponent(SettingsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
