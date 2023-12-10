import { Component } from '@angular/core';
import { CommonService } from '../Service/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  public loginName: string = 'admin';
  public myColor: string = 'red';
  public couter = 0;
  public couterBinhPhuong = 0;

  constructor(private common: CommonService) {}

  ngOnInit(): void {
    this.couter = this.common.couter;
    this.couterBinhPhuong = this.common.binhPhuong(this.couter);
    this.common.couter++;
  }
}
