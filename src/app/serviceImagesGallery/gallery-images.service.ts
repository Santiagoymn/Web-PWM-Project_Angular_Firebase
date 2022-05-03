import {Injectable, Input} from '@angular/core';
import {Galeria} from "../objetos";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import { doc, setDoc } from "firebase/firestore";
import {updateProfile} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class GalleryImagesService {

  @Input() galeria!: Galeria;


  constructor(private firestore: AngularFirestore) { }

  addNewImage(newId:any, alt:string, url:string){
    this.firestore.collection("imagenesGaleria").doc(newId)
      .set({alt: alt, url: url}).then (r =>{});
  }

  getImagesGaleria() {
    return this.firestore.collection<Galeria>('imagenesGaleria').valueChanges();
  }
}
