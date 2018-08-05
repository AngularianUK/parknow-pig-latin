import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from '@app/app.component';
import { PigLatinComponent } from '@app/feature/pig-latin/component/pig-latin/pig-latin.component';
import { PigLatinHistoryComponent } from '@app/feature/pig-latin/component/pig-latin-history/pig-latin-history.component';
import { SharedModule } from '@app/shared';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PigLatinComponent,
        PigLatinHistoryComponent
      ],
      imports: [
        SharedModule
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
