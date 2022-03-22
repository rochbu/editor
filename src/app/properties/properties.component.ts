import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties',
  template: `
  <!-- Nav tabs -->
  <ul class="nav nav-tabs" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
      <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Item</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Text</button>
    </li>
  </ul>

  <!-- Tab panes -->
  <div class="tab-content">
      <div class="tab-pane active" id="item" role="tabpanel" aria-labelledby="home-tab">
        <select class="form-select" aria-label="Default select example">
        <option value="square">Square</option>
        <option value="circle" selected>Circle</option>
        <option value="rectangle">Rectangle</option>
      </select>
    </div>
    <div class="tab-pane" id="text" role="tabpanel" aria-labelledby="profile-tab">...</div>
  </div>
  `,
  styleUrls: ['./properties.component.css'],
})
export class PropertiesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
