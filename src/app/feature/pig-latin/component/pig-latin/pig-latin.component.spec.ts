import { element } from 'protractor';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@app/shared';

import { PigLatinComponent } from './pig-latin.component';

describe('PigLatinComponent', () => {
  let component: PigLatinComponent;
  let fixture: ComponentFixture<PigLatinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PigLatinComponent ],
      imports: [
        SharedModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PigLatinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
