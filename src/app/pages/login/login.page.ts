import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario = {
    email: '',
    pass: ''
  };
  constructor() { }

  ngOnInit() {
  }

  onLogin() {
    console.log('Form submit');
  }

}
