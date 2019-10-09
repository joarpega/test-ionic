import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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


  constructor(private router: Router) { }

  ngOnInit() {
  }

  onRegister() {
    console.log('Form submit');
    console.log(this.usuario);
    console.log(firebase);
    firebase.auth().createUserWithEmailAndPassword(this.usuario.email, this.usuario.pass)
      .then(resp => {
        if (resp) {
          this.router.navigate(['/login']);
        }
      })
      .catch(console.error);
  }

}
