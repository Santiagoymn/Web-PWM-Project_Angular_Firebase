import { Component, OnInit } from '@angular/core';
import {GetterFirebaseService} from "../../serviceGeneral/getter-firebase.service";

@Component({
  selector: 'app-about-us-page-information',
  templateUrl: './about-us-page-information.component.html',
  styleUrls: ['./about-us-page-information.component.css', '../../app.component.css']
})
export class AboutUsPageInformationComponent implements OnInit {

  aboutUs = this.getterJsonService.getAboutUs();
  constructor( private getterJsonService: GetterFirebaseService) { }

  ngOnInit(): void {
  }

}
