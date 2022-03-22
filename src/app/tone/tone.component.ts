import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Tone } from '../model/tone';
import { SelectedEvent } from '../model/selectedEvent';
import { SelectionType } from '../model/selection-type.enum';

@Component({
  selector: 'g[tone2]',
  template: `
    <svg:g *ngIf="mode === 1 || (mode === 0 && tone.label !== '')">
      <svg:circle
        [attr.cx]="x"
        [attr.cy]="y"
        [attr.r]="r"
        [attr.style]="toneStyle"
        [attr.stroke-dasharray]="strokeDashArray"
        (click)="clicked()"
        (dblclick)="doubleClicked()"></svg:circle>
    
      <svg:text
        [attr.x]="x - 9"
        [attr.y]="y + 10"
        [attr.style]="textStyle"
        font-size="2em"
        (click)="clicked()"
        (dblclick)="doubleClicked()">{{tone.label}}</text>
    </g>
  `,
  styleUrls: ['./tone.component.css'],
})
export class ToneComponent implements OnInit {
  scale: number = 1;

  @Input() mode: number = 1;
  @Input() x: number = 10;
  @Input() y: number = 10;
  @Input() r: number = 10;
  @Input() tone: Tone;

  @Output() toneSelectedEvent: EventEmitter<SelectedEvent> =
    new EventEmitter<SelectedEvent>();

  height: number = 150;
  width: number = 10;

  toneStyle: string =
    'fill: green; stroke: black; stroke-width: 2; user-select: none;';
  textStyle: string = 'fill: black; user-select: none;';
  strokeDashArray: string = '1,0';

  isSingleClick: Boolean = true;

  constructor() {}

  ngOnInit() {
    if (this.tone.label === 'R') {
      this.toneStyle = 'fill: black; stroke: black; stroke-width: 2;';
      this.textStyle = 'fill: white;';
    } else if (this.tone.label === '') {
      this.toneStyle = 'fill: white; stroke: black; stroke-width: 2;';
      this.textStyle = 'fill: black;';
      this.strokeDashArray = '5,5';
    } else {
      this.toneStyle = 'fill: white; stroke: black; stroke-width: 2;';
      this.textStyle = 'fill: black;';
    }
  }

  clicked() {
    setTimeout(() => {
      if (this.isSingleClick) {
        console.log('Tone with label: ' + this.tone.label + ' was clicked!');

        this.toneSelectedEvent.emit(
          new SelectedEvent(SelectionType.Tone, 0, this.tone.string, this.tone.fret, this.tone.label)
        );
      }
    }, 250);

    this.isSingleClick = true;
  }

  doubleClicked() {
    this.isSingleClick = false;
    console.log('Tone with label: ' + this.tone.label + ' was double clicked!');
  }
}
