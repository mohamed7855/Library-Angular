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
          // console.log(res);
          if (res.status) this.router.navigateByUrl('/');
        },
        (e) => {
          // console.log(e.error.message);
          this.msgError = e.error.message;
        }
      );
    }
  }
}
