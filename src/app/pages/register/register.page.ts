import { Component, OnInit } from '@angular/core';

declare var firebase: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  usuario = {
    email: '',
    pass: '',
    conf_pass: ''
  };


  constructor() { }

  ngOnInit() {
  }

  onRegister() {
    console.log('Form submit');
    console.log(this.usuario);
    console.log(firebase);
    firebase.auth().createUserWithEmailAndPassword(this.usuario.email, this.usuario.pass)
    .then(console.log)
    .catch(console.error);
  }

}
