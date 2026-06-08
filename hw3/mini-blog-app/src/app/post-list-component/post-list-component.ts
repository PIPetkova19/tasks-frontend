import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostArray } from '../common/PostArray';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.html',
  styleUrl: './post-list-component.css',
  imports: [RouterLink, MatListModule,MatButtonModule]
})

export class PostListComponent {
  posts = PostArray;
}
