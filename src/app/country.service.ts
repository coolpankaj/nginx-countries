import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';



@Injectable({
  providedIn: 'root'
})
export class CountryService {

  public baseUrl = 'https://restcountries.eu/rest/v2/';


  constructor(public _http: HttpClient) {
    console.log('country service called');
  }
  public getRegionDetails(currentCountry): Observable<any> {
    console.log(currentCountry);
      const response = this._http.get(`${this.baseUrl}region/${currentCountry}`);
      console.log(response);
      return response;
  }

  public getSingleCountryDetails(countryname): Observable<any> {
    console.log(countryname);
    const response = this._http.get(`${this.baseUrl}name/${countryname}`);
    console.log(response);
    return response;
  }

  public getLanguageDetails(): Observable<any> {
    const response = this._http.get(`${this.baseUrl}all?fields=name;capital;flag;languages;currencies`);
    console.log(response);
    return response;
  }
}
