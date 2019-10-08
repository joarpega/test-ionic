import { Component } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  login: FormGroup;
  formBuilder = new FormBuilder();

  constructor() {
    this.login = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required)
    });


    this.login.valueChanges.subscribe(values => {
      console.log(values);
    });
  }

  send() {
    console.log(this.login);
  }


}
