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
  public VN: {
    city: string;
    district: string[];
  }[] = [
    { city: '--Select--', district: [] },
    {
      city: 'Hồ Chí Minh',
      district: [
        'Phường 1 - HCM',
        'Phường 2 - HCM',
        'Phường 3 - HCM',
        'Phường A - HCM',
        'Phường B - HCM',
        'Phường C - HCM',
      ],
    },
    {
      city: 'Hà Nội',
      district: [
        'Phường 1 - HN',
        'Phường 2 - HN',
        'Phường 3 - HN',
        'Phường A - HN',
        'Phường B - HN',
        'Phường C - HN',
      ],
    },
  ];

  public districts: string[] = [];

  public changeCity(event: any): void {
    const city = event.target.value;
    if (!city) return;

    // C1
    // const search = this.VN.filter((data) => data.city === city);
    // if (search && search.length > 0) {
    //   this.districts = search[0].district;
    // }

    // C2
    this.districts = this.VN.find((data) => data.city == city)?.district || [];
  }

  public ngOnInit(): void {
    console.log(this.VN);
  }
}
