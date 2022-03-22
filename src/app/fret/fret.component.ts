import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'g[fret]',
  template: `
    <svg:rect [attr.x]="x" [attr.y]="y" [attr.width]="width" [attr.height]="height"
      style="fill:rgb(114,116,114);stroke-width:2;stroke:rgb(0,0,0)"></svg:rect>
  `,
  styleUrls: ['./fret.component.css'],
})
export class FretComponent implements OnInit {
  scale: number = 1;

  @Input() x: number = 10;
  @Input() y: number = 10;

  @Input() height: number = 150;
  @Input() width: number = 10;

  constructor() {}

  ngOnInit() {}
}
