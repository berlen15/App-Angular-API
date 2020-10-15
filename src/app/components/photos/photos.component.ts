import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo.model';
import { PhotoServiceService } from '../../services/photo/photo-service.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos: Photo[]=[];
  constructor(private photosService: PhotoServiceService) {
    this.getAllPhotos();
  }

  ngOnInit(): void {
  }

  getAllPhotos(): void{
    this.photosService.getAllPhotos()
      .then(response=>{
          this.photos=response;
      })
  }

}
