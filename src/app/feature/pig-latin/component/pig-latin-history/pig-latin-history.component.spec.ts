import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PigLatinHistoryComponent } from './pig-latin-history.component';

describe('PigLatinHistoryComponent', () => {
  let component: PigLatinHistoryComponent;
  let fixture: ComponentFixture<PigLatinHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PigLatinHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PigLatinHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
