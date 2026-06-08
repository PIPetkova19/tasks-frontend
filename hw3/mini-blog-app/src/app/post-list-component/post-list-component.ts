import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostArray } from '../common/PostArray';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.html',
  styleUrl: './post-list-component.css',
  imports: [RouterLink]
})
export class PostListComponent {
  posts = PostArray;
}
