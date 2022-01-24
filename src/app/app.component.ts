import { Component } from '@angular/core';
import { environment } from './../environments/environment';
import { INewsItem } from './models/INewsItem';
import { AppStateService } from './services/app-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'latest-news-lucky-okoedion';
  selectedPage: "list" | "detail";
  loading: boolean;
  newsItem: INewsItem;

  constructor(private appStateService: AppStateService) {
    this.appStateService.getLoadingState().subscribe(value => {
      const theValue = value;
      if (typeof theValue !== 'undefined') {
        this.loading = theValue;
      }
    });

    this.appStateService.getSelectedPage().subscribe(valu => {
      const theValu = valu;
      if (typeof theValu !== 'undefined') {
        this.selectedPage = theValu;
      }
    })
  }


  switchToDetails(value: INewsItem) {
    this.newsItem = value;
    this.appStateService.setSelectedPage("detail");
  }
}
