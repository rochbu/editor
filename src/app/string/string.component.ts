import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'g[string]',
  template: `
    <svg:rect [attr.x]="x" [attr.y]="y" [attr.width]="width" [attr.height]="height"
      style="fill:rgb(113, 121, 126);stroke-width:2;stroke:rgb(0,0,0)"></svg:rect>
  `,
  styleUrls: ['./string.component.css'],
})
export class StringComponent implements OnInit {
  scale: number = 1;

  @Input() x: number = 10;
  @Input() y: number = 10;
  @Input() height: number = 10;
  @Input() width: number = 10;

  constructor() {}

  ngOnInit() {}
}
