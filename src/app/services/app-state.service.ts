import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IApiResponse } from '../models/IApiResponse';
import { map } from 'rxjs/operators';
import { INewsItem } from '../models/INewsItem';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  baseApiUrl = "https://newsdata.io/api/1/news";

  reqOptions = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    responseType: "json" as const,
    observe: "response" as const
  };

  newsList: Subject<IApiResponse> = new Subject();
  selectedPage: BehaviorSubject<"list" | "detail"> = new BehaviorSubject("list");
  loadingState: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private http: HttpClient) {


  }


  callApi(country?: string, category?: string, language?: string) {
    this.setLoadingState(true);
    let constructedUrl = "jesus-route";
    // construct url based on available parameters.

    if (typeof country !== 'undefined') {
      constructedUrl = `&country=${country}`;
    }

    if (typeof category !== 'undefined') {
      constructedUrl = `&category=${category}`;
    }

    if (typeof language !== 'undefined') {
      constructedUrl = `&language=${language}`;
    }

    return this.http.get<IApiResponse>
      (`https://latest-news-lucky-okoedion.herokuapp.com/data/${constructedUrl}`, this.reqOptions)
      .pipe(
        map((value: HttpResponse<IApiResponse>) => {
          const theValue = value.body
          return theValue;
        })
      );
  }

  getNewsList(): Observable<IApiResponse> {
    return this.newsList.asObservable();
  }

  setSelectedPage(value: "list" | "detail") {
    this.selectedPage.next(value);
  }

  getSelectedPage() {
    return this.selectedPage.asObservable();
  }

  setLoadingState(value: boolean) {
    this.loadingState.next(value);
  }

  getLoadingState() {
    return this.loadingState.asObservable();
  }

}
