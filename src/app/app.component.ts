import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cities: {};

  constructor() {
    this.cities = [
      { name: 'Nuuk,GL', isFeatured: false },
      { name: 'Urubici,BR', isFeatured: true },
      { name: 'Nairobi,KE', isFeatured: false },
    ];
  }
}
