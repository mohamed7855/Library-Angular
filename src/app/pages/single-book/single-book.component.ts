import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css'],
})
export class SingleBookComponent {
  id: any;
  singleBook: any;
  constructor(
    private global: GlobalService,
    private _activatedRoute: ActivatedRoute
  ) {
    _activatedRoute.paramMap.subscribe((params) => {
      // console.log(params);
      this.id = params.get('bookId');
      global.getSingleBook(this.id).subscribe((book) => {
        this.singleBook = book.data;
        // console.log(this.singleBook);
      });
    });
  }
}
