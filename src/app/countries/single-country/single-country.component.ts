import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../country.service';
import { Location } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-single-country',
  templateUrl: './single-country.component.html',
  styleUrls: ['./single-country.component.css']
})
export class SingleCountryComponent implements OnInit {

  public data: any = [];
  // tslint:disable-next-line:max-line-length
  constructor(public _route: ActivatedRoute, public router: Router, public countryservice: CountryService, private location: Location, public spinner: NgxSpinnerService) {
    console.log('single country view');
  }

  ngOnInit() {
    this.spinner.show();
    const countryname: any = this._route.snapshot.paramMap.get('countryname');
    console.log(countryname);

    this.countryservice.getSingleCountryDetails(countryname).subscribe(
      data => {
        this.data = data;
        console.log(data);
        this.spinner.hide();
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
