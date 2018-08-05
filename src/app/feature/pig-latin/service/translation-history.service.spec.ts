import { TestBed, inject } from '@angular/core/testing';

import { TranslationHistoryService } from './translation-history.service';

describe('TranslationHistoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TranslationHistoryService]
    });
  });

  it('should be created', inject([TranslationHistoryService], (service: TranslationHistoryService) => {
    expect(service).toBeTruthy();
  }));
});
