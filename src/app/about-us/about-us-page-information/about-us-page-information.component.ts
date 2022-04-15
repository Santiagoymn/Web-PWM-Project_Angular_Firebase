import { Component, OnInit } from '@angular/core';
import {GetterJsonService} from "../../getter-json.service";

@Component({
  selector: 'app-about-us-page-information',
  templateUrl: './about-us-page-information.component.html',
  styleUrls: ['./about-us-page-information.component.css']
})
export class AboutUsPageInformationComponent implements OnInit {

  aboutUs = this.getterJsonService.getAboutUs();
  constructor( private getterJsonService: GetterJsonService) { }

  ngOnInit(): void {
  }

}
