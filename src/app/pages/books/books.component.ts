import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  Books: any[] = []
  constructor(private global: GlobalService) {
    // console.log("Constructor");

    this.global.getBooks().subscribe(books => {
      // console.log(books.data);
      this.Books = books.data
    })

  }
}
