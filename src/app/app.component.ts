import { Component } from '@angular/core';
import { LoaderService } from './services/Loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showLoader: boolean;
  cities: {};

  constructor(
    loaderService: LoaderService
  ) {
    this.cities = [
      { name: 'Nuuk,GL', isFeatured: false },
      { name: 'Urubici,BR', isFeatured: true },
      { name: 'Nairobi,KE', isFeatured: false },
    ];

    this.showLoader = true;

    loaderService.loader$.subscribe(
      (arg) => {
        this.showLoader = arg;
      }
    );
  }
}
