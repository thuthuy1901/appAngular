import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../Service/http-server.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrl: './get-data.component.scss',
})
export class GetDataComponent implements OnInit {
  constructor(private httpServerService: HttpServerService) {}

  public ngOnInit(): void {
    this.httpServerService.getComments().subscribe((data) => {
      console.log('data', data);
    });
  }
}
