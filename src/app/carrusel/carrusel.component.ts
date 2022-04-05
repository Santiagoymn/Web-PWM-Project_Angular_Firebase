import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
/*import { Component } from '@angular/core';

@Component(
  {selector: 'ngbd-carousel-basic',
    templateUrl: './carousel-basic.html'}
)*/



export class CarruselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

export class NgbdCarouselBasic {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}

