import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../country.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import { Location } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
import { Allcountrydata } from './allcountries-interface';



@Component({
  selector: 'app-allcountries',
  templateUrl: './allcountries.component.html',
  styleUrls: ['./allcountries.component.css']
})
export class AllcountriesComponent implements OnInit {
  public data: any = [];
  public countryname: string;
  public selectedRegion: string;
  public selectedData: any = [];
  public filtervalue: any;
  // tslint:disable-next-line:max-line-length
  constructor(public _route: ActivatedRoute, public router: Router, public countryservice: CountryService, private location: Location, public spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    const countryname = this._route.snapshot.paramMap.get('name');
    console.log(countryname);
    this.selectedRegion = countryname;
    this.countryservice.getRegionDetails(countryname).subscribe(
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
