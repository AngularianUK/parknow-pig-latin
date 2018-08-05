import { element } from 'protractor';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@app/shared';

import { PigLatinComponent } from '@app/feature/pig-latin/component/pig-latin/pig-latin.component';
import { PigLatinHistoryComponent } from '@app/feature/pig-latin/component/pig-latin-history/pig-latin-history.component';

describe('PigLatinComponent', () => {
  let component: PigLatinComponent;
  let fixture: ComponentFixture<PigLatinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PigLatinComponent, PigLatinHistoryComponent ],
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
