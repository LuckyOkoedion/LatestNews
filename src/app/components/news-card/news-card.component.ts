import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INewsItem } from 'src/app/models/INewsItem';
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {
  @Input() newsItem: INewsItem;

  constructor(private appStateService: AppStateService, private router: Router) { }

  ngOnInit(): void {
  }

  toDetails() {
    this.appStateService.setSelectedNewsItem(this.newsItem);
    this.router.navigate(["/details"]);

  }

}
