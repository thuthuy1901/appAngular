import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public name: string = 'Thuy';
  public age: number = 18;
  public traiCay: string[] = ['táo', 'nho'];
  public traiCay2: { name: string; price: number; sale: boolean }[] = [
    { name: 'táo', price: 12000, sale: true },
    { name: 'nho', price: -10002, sale: false },
    { name: 'táo', price: 12000000, sale: true },
    { name: 'nho', price: -10002, sale: false },
  ];

  public ngOnInit(): void {
    console.log(this.traiCay);
  }
}
