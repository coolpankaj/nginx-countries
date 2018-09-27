import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegionComponent } from './region/region.component';
import { RouterModule, Routes } from '@angular/router';

import { CountryService } from './country.service';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';

import { NgxSpinnerModule } from 'ngx-spinner';
import { AllcountriesComponent } from './countries/allcountries/allcountries.component';
import { CountriesModule } from '../app/countries/countries.module';
// import { SingleCountryComponent } from './countries/single-country/single-country.component';

@NgModule({
  declarations: [
    AppComponent,
    RegionComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxSpinnerModule,
    CountriesModule,
    RouterModule.forRoot([
      { path: '', component: RegionComponent, pathMatch: 'full' },
      { path: 'countryview/:name', component: AllcountriesComponent },
      { path: '*', component: RegionComponent, pathMatch: 'full' },
      { path: '**', component: RegionComponent, pathMatch: 'full' }

    ])
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
