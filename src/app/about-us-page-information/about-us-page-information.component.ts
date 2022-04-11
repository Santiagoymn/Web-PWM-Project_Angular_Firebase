import { Component, OnInit } from '@angular/core';
import { AboutUsService } from '../about-us.service';

@Component({
  selector: 'app-about-us-page-information',
  templateUrl: './about-us-page-information.component.html',
  styleUrls: ['./about-us-page-information.component.css']
})
export class AboutUsPageInformationComponent implements OnInit {

  aboutUs = this.aboutUsService.getAboutUs();
  constructor( private aboutUsService: AboutUsService) { }

  ngOnInit(): void {
  }

}
