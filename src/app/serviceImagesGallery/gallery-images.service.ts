import {Injectable, Input} from '@angular/core';
import {Galeria} from "../objetos";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import { doc, setDoc } from "firebase/firestore";
import {updateProfile} from "@angular/fire/auth";
import {initializeApp} from "@angular/fire/app";
import {environment} from "../../environments/environment";
import {getStorage} from "firebase/storage";
import {ref} from "@angular/fire/storage";
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize, Observable} from "rxjs";
import {FileUpload} from "../models/file-upload";

@Injectable({
  providedIn: 'root'
})

export class GalleryImagesService {
  private basePath = '/fotos_galeria';

  constructor(private firestore: AngularFirestore, private storage: AngularFireStorage) {
  }

  pushFileToStorage(fileUpload: FileUpload): Observable<number | undefined> {
    const filePath = `${this.basePath}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);
    uploadTask.snapshotChanges().pipe(finalize(() => {
      storageRef.getDownloadURL().subscribe(downloadURL => {
        fileUpload.url = downloadURL;
        fileUpload.name = fileUpload.file.name;
        this.saveFileData(fileUpload);
      });
    })).subscribe();
    return uploadTask.percentageChanges();
  }

  private saveFileData(fileUpload: FileUpload): void {
      this.firestore.collection("imagenesGaleria").doc()
        .set({url: fileUpload.url , description: fileUpload.description}).then (r =>{});
  }

  getImagesGaleria() {
    return this.firestore.collection<Galeria>('imagenesGaleria').valueChanges();
  }
}
/*export class GalleryImagesService {

  private basePath = "/fotos_galeria";
  @Input() galeria!: Galeria;

  constructor(private firestore: AngularFirestore, private db: AngularFireDatabase, private storage: AngularFireStorage) { }

  addNewImage(newId:any, alt:string, url:string){
    this.firestore.collection("imagenesGaleria").doc(newId)
      .set({alt: alt, url: url}).then (r =>{});
  }

  getImagesGaleria() {
    return this.firestore.collection<Galeria>('imagenesGaleria').valueChanges();
  }

  uploadImage(image: File){
    const filePath = this.basePath + "/" + image.name;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, this.galeria);
    uploadTask.snapshotChanges().pipe(finalize(() => {
      storageRef.getDownloadURL().subscribe(downloadURL => {
        this.galeria.url = downloadURL;
        this.galeria.descripcion = "HOLA";
        this.saveFileData(this.galeria);
      });
    })).subscribe();
    return uploadTask.percentageChanges();
  }

  private saveFileData(fileUpload: Galeria): void {
    this.db.list(this.basePath).push(fileUpload);
  }

    /*var pathReference = storage.ref(alt + ".png");
    pathReference.getDownloadURL().then(function(url) {
      ref.push().set({
        imgurl: url
      });
    })

    pushFileToStorage(fileUpload: FileUpload): Observable<number| undefined> {
const filePath = `${this.basePath}/${fileUpload.file.name}`;
const storageRef = this.storage.ref(filePath);
const uploadTask = this.storage.upload(filePath, fileUpload.file);
uploadTask.snapshotChanges().pipe(finalize(() => {
storageRef.getDownloadURL().subscribe(downloadURL => {
fileUpload.url = downloadURL;
fileUpload.name = fileUpload.file.name;
this.saveFileData(fileUpload);
});
})).subscribe();
return uploadTask.percentageChanges();
}
}*/
