import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoModel } from 'src/app/models/photo.model';
import { PhotosService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  constructor(private route:ActivatedRoute, private photosService: PhotosService) { }

  ngOnInit(): void {
    
    let id = this.route.snapshot.paramMap.get('id');
    if(id!==null)
    this.getPhoto(parseInt(id))
  }

  photo: string|undefined;
  getPhoto(id:number)
  {
    this.photosService.getPhotos().subscribe(photos => this.photo = photos.find(item => item.id === id)?.url);
  }

}
