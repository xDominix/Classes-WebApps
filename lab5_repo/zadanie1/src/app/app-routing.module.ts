import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PhotoComponent } from './components/photo/photo.component';
import { PhotosComponent } from './components/photos/photos.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
{path:'posts', component: PostsComponent},
{path:'photos', component: PhotosComponent}, 
{path:'photos/:id', component: PhotoComponent}, 
{path:'**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
