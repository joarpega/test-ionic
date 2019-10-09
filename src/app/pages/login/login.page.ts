import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var firebase: any;

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
  constructor(private router: Router) { }

  ngOnInit() {
    // console.log(firebase.auth());
  }

  onLogin() {
    console.log('Form submit');
    console.log(this.usuario);
    firebase.auth().signInWithEmailAndPassword(this.usuario.email, this.usuario.pass)
    .then(resp => {
      console.log(resp);
      this.router.navigate(['/home'])
    })
    .catch( err => {
      if (err) {
        this.router.navigate(['/register']);
      }
    });
  }

}
