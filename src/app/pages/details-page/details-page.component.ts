import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INewsItem } from 'src/app/models/INewsItem';
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit, AfterViewInit, OnDestroy {
 @Input() newsItem: INewsItem;

  constructor(private stateService: AppStateService) {

  }

  ngOnInit(): void {
 

  }

  switchToList() {
    this.stateService.setSelectedPage("list");
  }

  ngAfterViewInit(): void {

  }


  ngOnDestroy(): void {

  }

}
