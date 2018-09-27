import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllcountriesComponent } from './allcountries/allcountries.component';
import { RouterModule, Router } from '@angular/router';
import { SingleCountryComponent } from './single-country/single-country.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LanguageComponent } from './language/language.component';
import { CurrencyComponent } from './currency/currency.component';

@NgModule({
  imports: [
    CommonModule,
    NgxSpinnerModule,
    RouterModule.forChild([
      {  path: 'singlecountry/:countryname', component: SingleCountryComponent },
      { path: 'languagefilter/:languagename', component: LanguageComponent },
      { path: 'currencyfilter/:currencyname', component: CurrencyComponent }
    ])
  ],
  declarations: [AllcountriesComponent, SingleCountryComponent, LanguageComponent, CurrencyComponent],
  exports: [AllcountriesComponent, SingleCountryComponent, LanguageComponent, CurrencyComponent]

})
export class CountriesModule { }
