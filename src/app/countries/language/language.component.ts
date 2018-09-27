import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CountryService } from '../../country.service';
import { Location } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  public languageName: string;
  public data: any;
  public selectedData: any = [];
  public selectedLanguage: string;
  // tslint:disable-next-line:max-line-length
  constructor(public _route: ActivatedRoute, public router: Router, public countryservice: CountryService, public location: Location, public spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    const templanguageName = this._route.snapshot.paramMap.get('languagename');
    const languageName = templanguageName.replace(/\,/g, '');
    console.log(languageName);
    this.selectedLanguage = languageName;
    this.countryservice.getLanguageDetails().subscribe(
      data => {


        for (const current of data) {
          for (const point of current.languages) {

            if (point.name === languageName) {
              this.selectedData = this.selectedData.concat(current);

            }
          }

        }
        console.log(this.selectedData);
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
