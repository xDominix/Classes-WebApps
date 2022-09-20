import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostModel } from '../../models/post-model';
import { PostsService } from '../../services/posts.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: PostModel[];

  constructor(
    private postsService: PostsService,
  ) {
    this.getPosts()
  }

  getPosts() {
    this.postsService.getPosts()
      .subscribe( posts => {this.posts = posts} )
  }

  
}
