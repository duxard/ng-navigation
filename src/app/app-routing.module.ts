import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsTrainingComponent } from './components/forms-training/forms-training.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { AboutComponent } from './components/about/about.component';
import {AboutExtraComponent} from './components/about-extra/about-extra.component';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'todos', component: TodoListComponent },
  { path: 'forms', component: FormsTrainingComponent },
  { path: 'posts', component: PostsComponent, canActivate: [AuthGuard] },
  { path: 'posts/:id', component: PostComponent },
  { path: 'about', component: AboutComponent, children: [
      {path: 'extra', component: AboutExtraComponent}
    ]},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomePageComponent,
  TodoListComponent,
  FormsTrainingComponent,
  PageNotFoundComponent
];
