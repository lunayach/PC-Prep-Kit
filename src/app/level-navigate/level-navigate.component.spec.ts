import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelNavigateComponent } from './level-navigate.component';

describe('LevelNavigateComponent', () => {
  let component: LevelNavigateComponent;
  let fixture: ComponentFixture<LevelNavigateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelNavigateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
