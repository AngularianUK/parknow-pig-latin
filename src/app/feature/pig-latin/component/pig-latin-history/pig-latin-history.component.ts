import { Component, Input,  OnChanges, SimpleChanges } from '@angular/core';
import { Translation } from '@app/feature/pig-latin/model/translation.model';

@Component({
  selector: 'app-pig-latin-history',
  templateUrl: './pig-latin-history.component.html',
  styleUrls: ['./pig-latin-history.component.scss']
})
export class PigLatinHistoryComponent implements OnChanges {

  readonly title = 'Recent Translations';
  translationHistory: Translation[] = [];
  @Input() currentTranslation: string;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.currentTranslation.previousValue) {
      this.updateHistory(changes.currentTranslation.currentValue);
    }
  }

  updateHistory(latestTranslation: Translation) {
    const newTranslation = new Translation(latestTranslation.input, latestTranslation.output);

    // Show history with most recent first
    this.translationHistory.unshift(newTranslation);

    // History will only show most recent 10 entries
    if (this.translationHistory.length > 10) {
      this.translationHistory = this.translationHistory.slice( 0 , 10 );
    }
  }

}

