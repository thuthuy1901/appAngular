import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  public couter: number = 0;
  constructor() {}

  public binhPhuong(n: number): number {
    return n * n;
  }
  public getCouter(): number {
    return this.couter;
  }
  public setCouter(n: number) {
    this.couter = n;
  }
}
