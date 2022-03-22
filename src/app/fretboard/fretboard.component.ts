import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Tone } from '../model/tone';
import { SelectedEvent } from '../model/selectedEvent';
import { SelectionType } from '../model/selection-type.enum';

@Component({
  selector: 'app-fretboard',
  template: `
  <svg [attr.width]="width" [attr.height]="height">
    <svg:rect [attr.width]="width" [attr.height]="height" fill-opacity="0.0"
      style="fill:rgb(255,255,255);stroke-width:3;stroke:rgb(0,0,0)" (click)="clicked()" />

    <svg:g *ngFor="let number of [0,1,2,3,4,5]">
      <svg:g fret [x]="number * fretSpacing" [y]="0" [height]="height" (click)="clicked()"></g>
    </g>

    <svg:g *ngFor="let number of [0,1,2,3,4,5]">
      <svg:g string
        [x]="0"
        [y]="heightIndent + number * stringSpacing"
        [height]="stringHieght"
        (click)="clicked()" [width]="width"></g>
    </g>

    <svg:g *ngFor="let stringNumber of [0,1,2,3,4,5]">
      <svg:g *ngFor="let fretNumber of [0,1,2,3,4,5]">
        <svg:g tone2
          [mode]="mode"
          [x]="fretNumber * fretSpacing + 0.5 * fretSpacing"
          [y]="heightIndent + stringNumber * stringSpacing"
          [r]="20"
          [tone]="tones[stringNumber][fretNumber]"
          (toneSelectedEvent)="toneSelectedEvent($event)"></g>
      </g>
    </g>

  </svg>
  `,
  styleUrls: ['./fretboard.component.css'],
})
export class FretboardComponent implements OnInit {
  @Input() id: number = 0;
  @Input() mode: number = 1;
  @Input() height: number = 300;
  @Input() width: number = 800;
  @Input() tones: Tone[][];

  @Output() fretboardSelectedEvent: EventEmitter<SelectedEvent> =
    new EventEmitter<SelectedEvent>();

  heightIndent: number = 20;

  startingFret: number = 0;
  endingFret: number = 8;

  scale: number = 1;

  strings: number = 6;
  frets: number = 8;

  stringSpacing: number = this.height / this.strings;
  stringHieght: number = 5;

  fretSpacing: number = this.width / this.frets;

  constructor() {}

  ngOnInit() {}

  clicked() {
    console.log('Fretboard was clicked!');
    this.fretboardSelectedEvent.emit(
      new SelectedEvent(SelectionType.Fretboard, this.id, 0, 0, '')
    );
  }

  // pass selection event back up to parent
  toneSelectedEvent(event) {
    event.fretboard = this.id;
    this.fretboardSelectedEvent.emit(event);
  }
}
