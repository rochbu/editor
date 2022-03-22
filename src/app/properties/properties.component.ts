import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties',
  template: `
  <select class="form-select" aria-label="Default select example">
    <option value="square">Square</option>
    <option value="circle" selected>Circle</option>
    <option value="rectangle">Rectangle</option>
  </select>`,
  styleUrls: ['./properties.component.css'],
})
export class PropertiesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
