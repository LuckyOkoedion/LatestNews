import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from './../environments/environment';
import { IApiResponse } from './models/IApiResponse';
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
  newsList: IApiResponse;
  mainCallSubscription: Subscription;

  constructor(private appStateService: AppStateService) {
    this.mainCallSubscription = this.appStateService.callApi().subscribe(valu => {
      const result = valu;
      if (typeof result !== "undefined") {
        this.newsList = result;
        this.appStateService.setLoadingState(false);
      }
    });
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

  handleFilter(value: IApiResponse) {
    this.mainCallSubscription.unsubscribe();
    this.newsList = value;
  }
}
