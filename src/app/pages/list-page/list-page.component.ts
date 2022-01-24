import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { dummydata } from 'src/app/models/dummy-data';
import { IApiResponse } from 'src/app/models/IApiResponse';
import { INewsItem } from 'src/app/models/INewsItem';
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  newsList: IApiResponse;

  @Output() toDetailsEvent = new EventEmitter<INewsItem>();


  constructor(private appStateService: AppStateService) {
    this.appStateService.callApi();
  }

  ngOnInit(): void {
    this.appStateService.getNewsList().subscribe(value => {
      const theValue = value;
      if (typeof theValue !== 'undefined') {
        this.newsList = theValue;
      }
    });
  }

  toDetails(data: INewsItem) {
    this.toDetailsEvent.emit(data);

  }

}
