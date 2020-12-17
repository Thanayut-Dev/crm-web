import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenService } from './authen.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenGuardService {

  constructor(
    private router: Router,
    private authenService:AuthenService,
  ) { }

  canActivate(): boolean {
    const token = window.localStorage.getItem(
      `token@`
    );
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTZkMjM2ZDY4YWVmZDAwMTcyZjExMzYiLCJ1c2VybmFtZSI6IkFkbWluMTExIiwiY3JlYXRlZCI6IjIwMjAtMDMtMTRUMTg6MzM6MTcuMjcxWiIsIl9fdiI6MCwibG9naW5Ub2tlbiI6IiJ9.vHb6QxHw6BcuovSeXhdXqAr4205HqqFnXQQhv5KKLZo'
    if (token) {
      this.authenService.onLoginChanged.next(true);
      return true;
    } else {
      this.router.navigate(['auth/login']);
      this.authenService.onLoginChanged.next(false);
      return false;
    }
  }
}
