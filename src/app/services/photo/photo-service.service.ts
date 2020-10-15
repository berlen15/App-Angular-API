import { Injectable } from '@angular/core';
import axios from "axios";
import { Photo } from '../../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotoServiceService {

  constructor() { }

  getAllPhotos(): Promise<Photo[]>{
    return axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.data.slice(0, 10));
  }
  getPhotoById(id: number): Promise<Photo>{
    return axios
      .get(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then(response => response.data);
  }
  deletePhoto(id: number): Promise<Photo>{
    return axios
      .delete(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then(response => response.data);
  }

  addPhoto(photo): Promise<Photo>{
    return axios
      .post("https://jsonplaceholder.typicode.com/photos/", photo)
      .then(response => response.data);
  }
}
