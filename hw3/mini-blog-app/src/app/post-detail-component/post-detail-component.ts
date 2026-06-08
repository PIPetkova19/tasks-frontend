import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostArray } from '../common/PostArray';
import { ActivatedRoute } from '@angular/router';
import { inject } from '@angular/core';
import { Post } from '../common/Post';

@Component({
  selector: 'app-post-detail-component',
  templateUrl: './post-detail-component.html',
  styleUrl: './post-detail-component.css',
  imports: [RouterLink]
})
export class PostDetailComponent {
  private route = inject(ActivatedRoute);

  post: Post | undefined;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.post = PostArray.find(p => p.id === id);
  }
}
