import { Component, OnInit } from '@angular/core';
import { Translation } from '@app/feature/pig-latin/model/translation.model';
import { TranslationService } from '@app/feature/pig-latin/service/translation.service';

@Component({
  providers: [TranslationService],
  selector: 'app-pig-latin',
  templateUrl: './pig-latin.component.html',
  styleUrls: ['./pig-latin.component.scss']

})
export class PigLatinComponent  {

  public userInput = '';
  public currentPigLatinTranslation: Translation = new Translation('', '');

  constructor( private translationService: TranslationService ) { }


  public translate( englishInput: string ) {
    this.currentPigLatinTranslation = this.translationService.translate( englishInput );
  }
}
