import { Component, OnInit } from '@angular/core';

declare var firebase: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  intervalRef: any;

  constructor() { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.intervalRef = setInterval(() => {
          console.log('Guardando registro');
        }, 10000);
        console.log('User Login', user);
      } else {
        console.log('User is not login');
      }

      console.log(user);
    });
  }

  singOut() {
    console.log('SingOut');
    clearInterval(this.intervalRef);
    firebase.auth().singOut();
  }

}
