import { Component, OnInit } from '@angular/core';

declare var firebase: any;
declare var database: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  intervalRef: any;
  user = firebase.auth().currentUser;

  constructor() { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(user => {
      database = firebase.database();
      this.user = user;
      if (user) {
        this.intervalRef = setInterval(() => {

          console.log('Guardando registro');
          const timestamp = Date.now();
          database.ref(timestamp).set({
            user: this.user.email,
            timestamp
          });

        }, 10000);
        console.log('User Login', user);
      } else {
        console.log('User is not login');
      }

    });


  }

  singOut() {
    console.log('SingOut', firebase);
    clearInterval(this.intervalRef);
    firebase.auth();
  }

}
