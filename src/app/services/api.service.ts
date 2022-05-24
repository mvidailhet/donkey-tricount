import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';

export interface User {
  id: string;
  name: string;
  avatar: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  getUsers(): Observable<User[]> {
    return this.firestore
      .collection<User>('user')
      .valueChanges({ idField: 'id' });
  }
}
