import { Injectable } from '@angular/core';
import { Translation } from '@app/feature/pig-latin/model/translation.model';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  static readonly vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  translatedWords: string[] = [];
  translatedSentence = '';

  /*******************
  * Public Service API
  ********************/

  // translate - translate an input English sentence into a Pig Latin sentence
  public translate(inputSentence: string): Translation {

    // Defensive programming. In fact disabled UI button should mean this should never happen, but...
    if ( !inputSentence.length ) {
      return;
    }

    // Clear down variable contents from any previous translate calls
    this.resetVariables();

    const inputWords = inputSentence.split(' ');

    // A word at a time, asynchronously and immutably translate the passed in separated words
    inputWords.map(word => {
      const vowelPosition = this.getVowelPosition(word);
      this.translatedWords.push(this.translateToPigLatin(word, vowelPosition));
    });

    // Take the translated words and rebuild them into a sentence using a space separator
    const translation = this.translatedWords.join(' ');
    this.translatedSentence = translation;
    const returnTranslation = new Translation(inputSentence, this.translatedSentence);

    return returnTranslation;
  }

  /************************
  * Private Helper Methods
  ************************/

  // getVowelPosition - return position in word of first vowel, or 0 if the word does not contain a vowel
 private getVowelPosition(word: string): number {

    // We could also use a Regular Expression, but most developers struggle with/dislike RegEx expressions so...
    const position = word.split('').findIndex( character =>
        TranslationService.vowels.includes(character));

    return position === -1 ? 0 : position;
  }

  // translateToPigLatin - take word and position of vowel to build PigLatin version of word
  private translateToPigLatin(word: string, position: number): string {
    const preVowelLetters = word.slice(0, position);
    const postVowelLetters = word.slice(position);
    const pigLatinSuffix = position > 0 ? 'ay' : 'way';

    return postVowelLetters + preVowelLetters + pigLatinSuffix;
  }

  // resetVariables - clear out translations from any previous translate invocations
  private resetVariables() {
    this.translatedWords = [];
    this.translatedSentence = '';
  }

}
