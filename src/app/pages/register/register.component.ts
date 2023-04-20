import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  //   {
  //     "firstName":"admin",
  //     "lastName":"omara",
  //     "email":"admin@gmail.com",
  //     "password":"Admin12345"
  //   }
  model: User = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  msgError = null;
  constructor(private global: GlobalService, private router: Router) {}
  handleSubmit(form: NgForm) {
    // console.log(form);
    if (form.valid) {
      this.global.register(this.model).subscribe(
        (res) => {
          // console.log(res);
          if (res.status) this.router.navigateByUrl('/');
        },
        (e) => {
          console.log(e.error);
          this.msgError = e.error.message;
        }
      );
    }
  }
}
