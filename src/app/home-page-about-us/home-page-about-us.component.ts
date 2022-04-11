import { Component, OnInit } from '@angular/core';
import { AboutUsService } from '../about-us.service';

//import {Breakpoints} from '@angular/cdk/layout';


@Component({
  selector: 'app-home-page-about-us',
  templateUrl: './home-page-about-us.component.html',
  styleUrls: ['./home-page-about-us.component.css']
})
export class HomePageAboutUsComponent implements OnInit {

  //isPhone = false;
  //isDesktop = false;
  //isTablet = false;
  aboutUs = this.aboutUsService.getAboutUs();
  constructor( private aboutUsService: AboutUsService) { } //private responsive: BreakpointObserver,

  ngOnInit(): void {
    /*this.responsive.observe(Breakpoints.HandsetPortrait).subscribe((result: { matches: any; }) => {
      this.isPhone = false;
      if (result.matches) {
        this.isPhone = true;
      }
    });
    this.responsive.observe(Breakpoints.HandsetPortrait).subscribe((result: { matches: any; }) => {
      this.isTablet = false;
      if (result.matches) {
        this.isTablet = true;
      }
    });
    this.responsive.observe(Breakpoints.HandsetPortrait).subscribe((result: { matches: any; }) => {
      this.isDesktop = false;
      if (result.matches) {
        this.isDesktop = true;
      }
    });*/
  }

}
