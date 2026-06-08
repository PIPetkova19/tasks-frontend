import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostArray } from '../common/PostArray';
import { ActivatedRoute } from '@angular/router'; //Това е Angular service, чрез който четем параметри от URL-а.
import { inject } from '@angular/core'; //Позволява dependency injection без constructor.
import { Post } from '../common/Post';

@Component({
  selector: 'app-post-detail-component',
  templateUrl: './post-detail-component.html',
  styleUrl: './post-detail-component.css',
  imports: [RouterLink]
})
export class PostDetailComponent {
  private route = inject(ActivatedRoute); //vmesto constructor

  post: Post | undefined;

  ngOnInit(): void { //Angular автоматично извиква този метод, когато компонентът се зареди.
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.post = PostArray.find(p => p.id === id);
  }
}
