import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonService } from '../Service/common.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss',
})
export class ReactiveFormComponent {
  // public formData: FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   age: new FormControl(''),
  // });

  public formData = this.formBuider.group({
    name: ['', Validators.required],
    age: ['', Validators.required],
  });

  constructor(private common: CommonService, private formBuider: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(): void {
    // console.log('formData', this.formData);
    this.common.submitData(this.formData.value);
  }
}
