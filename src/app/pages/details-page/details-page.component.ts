import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INewsItem } from 'src/app/models/INewsItem';
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit, AfterViewInit, OnDestroy {
  newsItem: INewsItem;

  constructor(private stateService: AppStateService, private router: Router) {
   
  }

  ngOnInit(): void {
    this.stateService.getSelectedNewsItem().subscribe(value => {
      const theValue = value;
      if (typeof theValue !== 'undefined') {
        this.newsItem = theValue;
      }
    })

  }

  ngAfterViewInit(): void {

  }


  ngOnDestroy(): void {
    this.stateService.setSelectedNewsItem(null);
  }

}
