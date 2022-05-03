import { Component, OnInit } from '@angular/core';
import firebase from "firebase/compat";

@Component({
  selector: 'app-upload-gallery',
  templateUrl: './upload-gallery.component.html',
  styleUrls: ['./upload-gallery.component.css']
})
export class UploadGalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  uploadImage(alt:string, image: File){
    var ref= firebase.database().ref("fotos_galeria");
    var storage = firebase.storage();
    var pathReference = storage.ref(alt + ".png");
    pathReference.getDownloadURL().then(function(url) {
      ref.push().set({
        imgurl: url
      });
    })
  }
}
