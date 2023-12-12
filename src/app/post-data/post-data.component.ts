import { Component } from '@angular/core';
import { HttpServerService } from '../Service/http-server.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrl: './post-data.component.scss',
})
export class PostDataComponent {
  constructor(private httpServerService: HttpServerService) {}

  public ngOnInit(): void {
    const payload = { body: 'some comment', postId: 3 };
    this.httpServerService.postComments(payload).subscribe((data) => {
      console.log('data', data);
    });
  }
}
