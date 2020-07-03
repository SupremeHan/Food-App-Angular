import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Star {
  userId: any;
  foodId: any;
  value: number;
}

@Injectable({
  providedIn: 'root'
})
export class StarService {

  constructor(private afs: AngularFirestore) { }

  getUserStars(userId) {
    const starsRef = this.afs.collection('stars', ref => ref.where('userId', '==', userId));
    return starsRef.valueChanges();
  }

  getMovieStars(foodId) {
    const starsRef = this.afs.collection('stars', ref => ref.where('foodId','==', foodId));
    return starsRef.valueChanges();
  }

  setStar(userId, foodId, value) {
    const star: Star = { userId, foodId, value};

    const starPath = `stars/${star.userId}_${star.foodId}`;

    return this.afs.doc(starPath).set(star);
  }

}
