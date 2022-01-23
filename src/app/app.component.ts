import { Component } from '@angular/core';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'latest-news-lucky-okoedion';

  constructor() {
    console.log(`Api key is: ${environment.API_KEY}`);
  }
}
