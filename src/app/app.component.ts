import { Component } from '@angular/core';
import { Tone } from './model/tone';
import { SelectedEvent } from './model/selectedEvent';
import { SelectionType } from './model/selection-type.enum';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  itemSelected: Boolean = false;
  selection: SelectedEvent | undefined;

  tones: Tone[][] = [
    [
      new Tone(0, 0, ''),
      new Tone(0, 1, '3'),
      new Tone(0, 2, '4'),
      new Tone(0, 3, ''),
      new Tone(0, 4, '5'),
      new Tone(0, 5, ''),
      new Tone(0, 6, ''),
    ],
    [
      new Tone(1, 0, ''),
      new Tone(1, 1, '7'),
      new Tone(1, 2, 'R'),
      new Tone(1, 3, ''),
      new Tone(1, 4, '2'),
      new Tone(1, 5, ''),
      new Tone(1, 6, ''),
    ],
    [
      new Tone(2, 0, ''),
      new Tone(2, 1, '5'),
      new Tone(2, 2, ''),
      new Tone(2, 3, '6'),
      new Tone(2, 4, ''),
      new Tone(2, 5, ''),
      new Tone(2, 6, ''),
    ],
    [
      new Tone(3, 0, ''),
      new Tone(3, 1, '3'),
      new Tone(3, 2, ''),
      new Tone(3, 3, '5'),
      new Tone(3, 4, ''),
      new Tone(3, 5, ''),
      new Tone(3, 6, ''),
    ],
    [
      new Tone(4, 0, ''),
      new Tone(4, 1, '6'),
      new Tone(4, 2, ''),
      new Tone(4, 3, '7'),
      new Tone(4, 4, 'R'),
      new Tone(4, 5, ''),
      new Tone(4, 6, ''),
    ],
    [
      new Tone(5, 0, ''),
      new Tone(5, 1, '3'),
      new Tone(5, 2, '4'),
      new Tone(5, 3, ''),
      new Tone(5, 4, '5'),
      new Tone(5, 5, ''),
      new Tone(5, 6, ''),
    ],
  ];

  mode: number = 0;

  setEditMode() {
    this.mode = 1;
  }

  setDisplayMode() {
    this.mode = 0;
  }

  fretboardSelectedEvent(event) {
    this.itemSelected = true;
    this.selection = event;

    console.log(event);
  }

  onSubmit() {}
}
