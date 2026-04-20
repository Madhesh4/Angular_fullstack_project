import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser$: Observable<User | null>;

  constructor() {
    // SSR Fix: Check if we are running in the browser before using localStorage
    let storedUser = null;
    if (typeof window !== 'undefined') {
      const data = localStorage.getItem('user');
      storedUser = data ? JSON.parse(data) : null;
    }

    this.currentUserSubject = new BehaviorSubject<User | null>(storedUser);
    this.currentUser$ = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  login(credentials: any) {
    const mockUser: User = { id: '1', username: 'admin', role: 'admin' };
    if (typeof window !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(mockUser));
    }
    this.currentUserSubject.next(mockUser);
  }

  logout() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user');
    }
    this.currentUserSubject.next(null);
  }
}