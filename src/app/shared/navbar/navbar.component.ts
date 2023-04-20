import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(public global: GlobalService, private router: Router) {}

  handleClick() {
    localStorage.removeItem('token');
    this.global.isLogin = false;
    this.router.navigateByUrl('/SignIn');
  }
}
