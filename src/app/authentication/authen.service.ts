import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  token: any;
  onLoginChanged: BehaviorSubject<any>;

  constructor(
    private http: HttpClient
  ) {
    this.onLoginChanged = new BehaviorSubject({});
  }


  login(data: any) {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTZkMjM2ZDY4YWVmZDAwMTcyZjExMzYiLCJ1c2VybmFtZSI6IkFkbWluMTExIiwiY3JlYXRlZCI6IjIwMjAtMDMtMTRUMTg6MzM6MTcuMjcxWiIsIl9fdiI6MCwibG9naW5Ub2tlbiI6IiJ9.vHb6QxHw6BcuovSeXhdXqAr4205HqqFnXQQhv5KKLZo'
    window.localStorage.setItem(`token@`, token);
    this.onLoginChanged.next(true);
  }

  logout() {
    window.localStorage.removeItem(`token@`);
    this.onLoginChanged.next(false);
  }

}
