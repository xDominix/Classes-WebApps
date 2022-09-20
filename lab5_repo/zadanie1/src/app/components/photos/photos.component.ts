import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PhotoModel } from 'src/app/models/photo.model';
import { PhotosService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {
  
  photos: PhotoModel[];
  constructor(
    private photosService: PhotosService
  ) { }

  getPhotos(): void{
    this.photosService.getPhotos()
      .subscribe(photos => this.photos = photos)
  }

  ngOnInit() {
    this.getPhotos()
  }

}
