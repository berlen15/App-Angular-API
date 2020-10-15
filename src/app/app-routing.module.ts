import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoDetailsComponent } from './components/photo-details/photo-details.component';
import { PhotosComponent } from './components/photos/photos.component';

const routes: Routes = [
  {path: '', redirectTo: '/photos', pathMatch: "full"},
  {path: 'photos', component: PhotosComponent},
  {path: 'photos/:id', component: PhotoDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
