import { Component } from '@angular/core';
import { environment } from './../environments/environment';
import { AppStateService } from './services/app-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'latest-news-lucky-okoedion';
  loading: boolean;

  constructor(private appStateService: AppStateService) {
    this.appStateService.getLoadingState().subscribe(value => {
      const theValue = value;
      if (typeof theValue !== 'undefined') {
        this.loading = theValue;
      }
    });
  }
}
