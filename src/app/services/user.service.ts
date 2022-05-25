import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User | undefined;
}
