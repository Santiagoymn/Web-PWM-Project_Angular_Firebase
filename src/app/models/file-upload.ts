export class FileUpload {
  id!: string;
  name!: string;
  url!: string;
  description!: string;
  file: File;
  constructor(file: File) {
    this.file = file;
  }
}
