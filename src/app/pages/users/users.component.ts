import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users: any[] = []
  constructor(private global: GlobalService) {
    // console.log("Constructor");

    this.global.getBooks().subscribe(data => {
      console.log(data.data);
      this.users = data.data
    })

  }
}
