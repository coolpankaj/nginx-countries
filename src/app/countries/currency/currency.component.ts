import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CountryService } from '../../country.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  public selectedCurrency: any;
  public selectedData: any = [];

  // tslint:disable-next-line:max-line-length
  constructor(public _route: ActivatedRoute, public router: Router, public location: Location, public countryservice: CountryService, public spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    const tempcurrencyName = this._route.snapshot.paramMap.get('currencyname');
    const currencyName = tempcurrencyName.replace(/\,/g, '');
    console.log(currencyName);
    this.selectedCurrency = currencyName;
    this.countryservice.getLanguageDetails().subscribe(
      data => {


        for (const current of data) {
          for (const point of current.currencies) {

            if (point.name === currencyName) {
              this.selectedData = this.selectedData.concat(current);
            }
          }

        }
        console.log(this.selectedData);
       setTimeout(() => {
        this.spinner.hide();
       }, 1000);
      },
      error => {
        console.log(error.errorMessage);
      }

    );

  }

  public goback = () => {
    this.location.back();
  }
}
