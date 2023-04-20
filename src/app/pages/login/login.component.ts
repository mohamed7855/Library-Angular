import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  model: any = {
    email: '',
    password: '',
  };
  msgError = null;
  constructor(private global: GlobalService, private router: Router) {}
  handleSubmit(form: NgForm) {
    // console.log(form);
    if (form.valid) {
      this.global.login(this.model).subscribe(
        (res) => {
          // console.log(res.data.token);
          localStorage.setItem('token', res.data.token);
          this.global.isLogin = true;
          // console.log(res);
          if (res.apiStatus) this.router.navigateByUrl('/books');
        },
        (e) => {
          // console.log(e.error.message);
          this.msgError = e.error.message;
        }
      );
    }
  }
}
