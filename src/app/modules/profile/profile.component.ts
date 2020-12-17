import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenService } from 'src/app/authentication/authen.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  username = "thanayut"

  constructor(
    private authenService: AuthenService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.authenService.logout();
    this.router.navigate(['auth/login']);
  }

}
