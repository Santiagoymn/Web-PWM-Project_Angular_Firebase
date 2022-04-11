import {Injectable, Input} from '@angular/core';
import {DiscoverGC} from "./objetos";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DiscoverGCService {

  @Input() discoverGC!: DiscoverGC;
  constructor(private http: HttpClient) {
  }

  getMunicipios() {
    return this.http.get<DiscoverGC[]>('/assets/discoverGC.json');
  }
}
