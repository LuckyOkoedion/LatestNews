import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Input() newsList: IApiResponse;

  @Output() toDetailsEvent = new EventEmitter<INewsItem>();
  @Output() filterBoosterEvent = new EventEmitter<IApiResponse>();


  constructor(private appStateService: AppStateService) {

  }

  ngOnInit(): void {

  }

  toDetails(data: INewsItem) {
    this.toDetailsEvent.emit(data);

  }

  pushFilterEvent(data: IApiResponse) {
    this.filterBoosterEvent.emit(data);
  }

}
