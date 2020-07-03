import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();

  newUser: any;

  constructor(private afAuth: AngularFireAuth,
              private     db: AngularFirestore,
              private router: Router) { }

  getUserState() {
    return this.afAuth.authState;
  }

  login( email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.eventAuthError.next(error);
      })
      .then(userCredentail => {
        if(userCredentail) {
        this.router.navigate(['/main']);
        }
      }) 
  }

  createUser(user) {
    this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(userCredentail => {
        this.newUser = user;
        console.log(userCredentail);
        userCredentail.user.updateProfile({
          displayName: user.firstName + ' ' + user.lastName
        });

        this.insertUserData(userCredentail)
          .then(() => {
            this.router.navigate(['/main'])
          })
        
        .catch(error => {
          this.eventAuthError.next(error);
        })
        

      })
  }

  insertUserData( userCredentail: firebase.auth.UserCredential) {
    return this.db.doc(`Users/${userCredentail.user.uid}`).set({
      email: this.newUser.email,
      firstName: this.newUser.firstName,
      lastName: this.newUser.lastName,
      adress: this.newUser.adress,
      phone: this.newUser.phone
    })
  }

  logout() {
    return this.afAuth.auth.signOut();
  }
}
