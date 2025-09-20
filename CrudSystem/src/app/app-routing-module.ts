import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Posts } from './pages/posts/posts';
import { Index } from './pages/index';
import { Service } from './pages/service/service';
import { SinglePost } from './pages/single-post/single-post';

const routes: Routes = [
  { path: '', component: Index },
  { path: 'posts', component: Posts },
  { path: 'posts/:postId', component: SinglePost },
  { path: 'service', component: Service },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
