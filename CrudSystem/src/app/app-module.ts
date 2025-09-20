import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './shared/navbar/navbar';
import { Footer } from './shared/footer/footer';
import { Index } from './pages/index/index';
import { Posts } from './pages/posts/posts';
import { Service } from './pages/service/service';
import { SinglePost } from './pages/single-post/single-post';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [App, Navbar, Footer, Index, Posts, Service, SinglePost],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
