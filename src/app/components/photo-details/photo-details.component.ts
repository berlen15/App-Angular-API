import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/models/photo.model';
import { PhotoServiceService } from '../../services/photo/photo-service.service';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {
  photoDetail: Photo;
  constructor(private photoService: PhotoServiceService, private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    this.getDetails(id);
   }

  ngOnInit(): void {
  }

  getDetails(id): void{
    this.photoService.getPhotoById(id)
      .then (response => {
        this.photoDetail = response;
      })
  }

}
