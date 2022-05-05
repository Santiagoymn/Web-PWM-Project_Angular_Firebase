import { Component, OnInit } from '@angular/core';
import {GalleryImagesService} from "../../serviceImagesGallery/gallery-images.service";
import {FileUpload} from "../../models/file-upload";

@Component({
  selector: 'app-upload-gallery',
  templateUrl: './upload-gallery.component.html',
  styleUrls: ['./upload-gallery.component.css']
})
export class UploadGalleryComponent implements OnInit {
  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;
  percentage: number | undefined;

  constructor(private galleryService: GalleryImagesService) { }

  ngOnInit(): void {
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      this.selectedFiles = undefined;
      if (file) {
        this.currentFileUpload = new FileUpload(file);
        this.currentFileUpload.description = (<HTMLInputElement>document.getElementById("description")).value;
        this.galleryService.pushFileToStorage(this.currentFileUpload)
          .subscribe(
            percentage => {
              this.percentage = Math.round(percentage ? percentage : 0);
            },
            error => {
              console.log(error);
            }
          );
      }
    }
  }

  tittleFile(){
    if (this.selectedFiles) {
      // @ts-ignore
      return this.selectedFiles.item(0).name;
    }else{
      return "";
    }
  }


}
