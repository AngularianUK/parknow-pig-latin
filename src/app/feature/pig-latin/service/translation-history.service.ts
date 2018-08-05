import { Translation } from '@app/feature/pig-latin/model/translation.model';

export class TranslationHistoryService {

  recentTranslations: Translation[] = [];

  /*******************
  * Public Service API
  ********************/

  // updateHistory - add the latest translation to the recent history
  updateHistory(translation: Translation): void {

    // We want no more than ten of the most recent translations
    if ( this.recentTranslations.length >= 10 ) {
      this.recentTranslations.splice( 0, 1 );
    }

    this.recentTranslations.push( translation );
  }

}
