import { Component, OnInit } from '@angular/core';
import { dummydata } from 'src/app/models/dummy-data';
import { IApiResponse } from 'src/app/models/IApiResponse';
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  newsList: IApiResponse = dummydata;


  constructor(private appStateService: AppStateService) {
    // this.appStateService.callApi();
  }

  ngOnInit(): void {
    // this.appStateService.getNewsList().subscribe(value => {
    //   const theValue = value;
    //   if (typeof theValue !== 'undefined') {
    //     this.newsList = theValue;
    //     console.log(JSON.stringify(this.newsList))
    //   }
    // });
  }

}
