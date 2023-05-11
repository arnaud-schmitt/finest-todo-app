import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Auth, createAuth } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$ = new BehaviorSubject<Partial<Auth>>(createAuth({}));

  constructor() { }

  setEmail(email: string): void {
    this.user$.next(createAuth({ email }));
    console.log(this.user$.value);
  }

  setPassword(password: string): void {
    this.user$.next({ ...this.user$.value, ...createAuth({ password }) });
    console.log(this.user$.value);
  }

  authenticate(): void {
    setTimeout(() => {
      this.user$.next(Object.assign(this.user$.value, { authenticated: true }));
    }, 3000);
  }

}
