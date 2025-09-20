import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-single-post',
  standalone: false,
  templateUrl: './single-post.html',
  styleUrl: './single-post.css',
})
export class SinglePost {
  id: any;
  route: any;
  singlePost: any = [];
  posts: any[] = [];
  alerts: string = ``;
  constructor(public activatedRoute: ActivatedRoute, private router: Router) {
    const stored = JSON.parse(localStorage.getItem('NewsPosts') ?? '[]');
    this.posts = Array.isArray(stored) ? stored : [];
    this.id = this.activatedRoute.snapshot.paramMap.get('postId');
    this.singlePost = this.posts.find((item) => item.id == this.id);
  }
  handleDeletePost(id: number) {
    this.posts = this.posts.filter((post) => post.id !== id);
    localStorage.setItem('NewsPosts', JSON.stringify(this.posts));
    this.router.navigate(['/posts']);
  }
  handelEditePost(id: number) {
    const index = this.posts.findIndex((post) => post.id === id);
    if (index !== -1) {
      this.posts[index] = {
        id: this.singlePost.id,
        title: this.singlePost.title,
        body: this.singlePost.body,
      };

      localStorage.setItem('NewsPosts', JSON.stringify(this.posts));
      this.alerts = `
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                          <strong>Post Edited</strong> click close to see content
                          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                      `;
    }
  }
}
