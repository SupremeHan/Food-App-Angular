import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Item } from '../../models/item';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  user: firebase.User;
  items: Observable<Item[]>;

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    this.auth.getUserState().subscribe( user => {
      this.user = user;
      console.log(user);
    })
  }

  logout() {
    this.auth.logout();
  }
}
