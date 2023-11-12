import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsPageComponent } from './lessons-page.component';
import { CommonModule } from '@angular/common';

import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule, MatRippleModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { LessonsRoutingModule } from '../../lessons-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LessonsPageComponent', () => {
  let component: LessonsPageComponent;
  let fixture: ComponentFixture<LessonsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        LessonsRoutingModule,
        MatIconModule,
        MatListModule,
        MatDividerModule,
        RouterModule,
        MatCardModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatIconModule,
        MatListModule,
        MatOptionModule,
        MatSelectModule,
        BrowserAnimationsModule
      ],
      declarations: [LessonsPageComponent]
    });
    fixture = TestBed.createComponent(LessonsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
