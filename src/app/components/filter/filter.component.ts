import { Component, OnInit } from '@angular/core';
import { CategoryOptionsEnum } from 'src/app/models/CategoryOptionsEnum';
import { CountryOptionsMapping, LanguageOptionsMapping } from 'src/app/models/constants';
import { CountryOptionsEnum } from 'src/app/models/CountryOptionsEnum';
import { LanguageOptionsEnum } from 'src/app/models/LanguageOptionsEnum';
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  countryList: string[] = Object.values(CountryOptionsEnum);
  languageList: string[] = Object.values(LanguageOptionsEnum);
  categoryList: string[] = Object.values(CategoryOptionsEnum);
  languageMapping = {};
  countryMapping = {};
  selectedCountry;
  selectedLanguage;
  selectedCategory;

  constructor(private appStateService: AppStateService) {
    Object.assign(this.countryMapping, CountryOptionsMapping);
    Object.assign(this.languageMapping, LanguageOptionsMapping);
  }

  ngOnInit(): void {
  }

  filterByCountry() {
    this.appStateService.callApi(this.selectedCountry, this.selectedCategory, this.selectedLanguage);
    // Do any other this specific to this filter
  }

  filterByLanguage() {
    this.appStateService.callApi(this.selectedCountry, this.selectedCategory, this.selectedLanguage);
    // Do any other this specific to this filter
  }

  filterByCategory() {
    this.appStateService.callApi(this.selectedCountry, this.selectedCategory, this.selectedLanguage);
    // Do any other this specific to this filter
  }

}
