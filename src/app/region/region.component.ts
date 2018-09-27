import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import * as $ from 'jquery';
import { NgxSpinnerService } from 'ngx-spinner';
import {  Router } from '@angular/router';




@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  constructor(public country: CountryService, public spinner: NgxSpinnerService, public router: Router) {
    console.log('region component called');
  }


  public regions = [
    {
      'name': 'Asia',
      'numberofcountries': 47,
      'img': 'https://www.tajmahal.gov.in/images/slider/slider.jpg'
    },
    {
      'name': 'Africa',
      'numberofcountries': 54,
      'img': 'http://www.primaryhomeworkhelp.co.uk/egypt/images/sp.jpg'

    },

    {
      'name': 'Americas',
      'numberofcountries': 35,
      'img': 'https://i.ndtvimg.com/i/2018-01/statue-of-liberty_650x400_61516584069.jpg'
    },
    {
      'name': 'Oceania',
      'numberofcountries': 14,
      // tslint:disable-next-line:max-line-length
      'img': 'http://www.traveller.com.au/content/dam/images/1/1/k/j/n/k/image.gallery.galleryLandscape.620x414.11kg16.png/1459821698905.jpg'
    },
    {
      'name': 'Europe',
      'numberofcountries': 43,
      'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcs-GUNYJLmTwSAVEtUJ7nH-bmDYlslGScbcQXVM72qk09iuqg'
    }
  ];

  ngOnInit() {

    $('#result').hide();


  }
  public showdata = () => {
    this.spinner.show();
      setTimeout(() => {
      $('#main').slideUp();
      $('#result').show();
      this.spinner.hide();
    }, 1500);
  }
  public hidedata = () => {
    $('#main').slideDown();
    $('#result').hide();
  }


}
