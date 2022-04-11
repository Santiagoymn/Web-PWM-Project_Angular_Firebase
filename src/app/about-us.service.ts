import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SobreNosotrosGeneral } from './objetos';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {

  @Input() sobreNosotros!: SobreNosotrosGeneral;
  constructor(private http: HttpClient) {
  }

  getAboutUs() {
    return this.http.get<SobreNosotrosGeneral[]>('/assets/sobreNosotros.json');
  }
}
