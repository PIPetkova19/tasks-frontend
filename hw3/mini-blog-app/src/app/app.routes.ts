import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { PostDetailComponent } from './post-detail-component/post-detail-component';
import { PostListComponent } from './post-list-component/post-list-component';
import { NotFoundComponent } from './not-found-component/not-found-component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'postDetail/:id', component: PostDetailComponent, },
    { path: 'postList', component: PostListComponent },
    { path: '**', component: NotFoundComponent }
];
