import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IApiResponse } from '../models/IApiResponse';
import { map } from 'rxjs/operators';
import { INewsItem } from '../models/INewsItem';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  baseApiUrl = "https://newsdata.io/api/1/news";
  apiKey = environment.API_KEY;

  reqOptions = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    responseType: "json" as const,
    observe: "response" as const
  };

  newsList: Subject<IApiResponse> = new Subject();
  selectedNewsItem: Subject<INewsItem> = new Subject();

  constructor(private http: HttpClient) {


  }


  callApi(country?: string, category?: string, language?: string) {
    let constructedUrl = this.baseApiUrl + `?apikey=${this.apiKey}`;
    // construct url based on available parameters.

    if (typeof country !== 'undefined') {
      constructedUrl = constructedUrl + `&country=${country}`;
    }

    if (typeof category !== 'undefined') {
      constructedUrl = constructedUrl + `&category=${category}`;
    }

    if (typeof language !== 'undefined') {
      constructedUrl = constructedUrl + `&language=${language}`;
    }

    this.http.get<IApiResponse>
      (constructedUrl, this.reqOptions)
      .pipe(
        map((value: HttpResponse<IApiResponse>) => {
          const theValue = value.body
          return theValue;
        })
      ).subscribe(valu => {
        const result = valu;
        if (typeof result !== "undefined") {
          this.newsList.next(result);
        }
      })
  }

  getNewsList(): Observable<IApiResponse> {
    return this.newsList.asObservable();
  }

  setSelectedNewsItem(value: INewsItem) {
    this.selectedNewsItem.next(value);
  }

  getSelectedNewsItem() {
    return this.selectedNewsItem.asObservable();
  }

}
