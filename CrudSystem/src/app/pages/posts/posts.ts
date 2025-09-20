import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  standalone: false,
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts {
  id: any;
  title: any;
  body: any;
  posts: any[] = [];
  alerts: string = ``;

  constructor() {
    const stored = localStorage.getItem('NewsPosts');
    this.posts = stored && stored !== 'undefined' ? JSON.parse(stored) : [];
  }
  handelAddPost() {
    let NewPosts = {
      id: this.id,
      title: this.title,
      body: this.body,
    };
    let used = this.posts.some((post) => post.id === NewPosts.id);

    if (used) {
      this.alerts = `
                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                          <strong>ID Used!</strong> This ID is used in anther post
                          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                      `;
      return;
    }
    if (isNaN(NewPosts.id)) {
      this.alerts = `
                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                          <strong>It's Not Number!</strong> ID just Number 
                          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                      `;
      return;
    }
    this.alerts = ``;
    this.posts.push(NewPosts);
    localStorage.setItem('NewsPosts', JSON.stringify(this.posts));
    this.id = '';
    this.title = '';
    this.body = '';
  }

  handleDeletePost(index: number) {
    this.posts.splice(index, 1);
    localStorage.setItem('NewsPosts', JSON.stringify(this.posts));
  }
}
