import { Component } from '@angular/core';
import { CommonService } from '../Service/common.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss',
})
export class TemplateDrivenFormComponent {
  public name: string = '';

  constructor(private common: CommonService) {}

  public submitForm(): void {
    this.common.submitData({ name: this.name });
  }
}
