import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { FilterComponent } from './components/filter/filter.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsCardComponent } from './components/news-card/news-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsPageComponent,
    ListPageComponent,
    FilterComponent,
    HeaderComponent,
    NewsCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
