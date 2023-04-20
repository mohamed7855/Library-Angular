import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent {

  id:any
  singlePost:any
  constructor(private global: GlobalService , private _activatedRoute: ActivatedRoute) {
    // let id = this._activatedRoute.snapshot.paramMap.get('postId')
    this.id = this._activatedRoute.snapshot.paramMap.get('postId')
    global.getSingleBook(this.id).subscribe(Post=>{
      this.singlePost=Post
      console.log("single"+this.singlePost);
    })

  }
}
