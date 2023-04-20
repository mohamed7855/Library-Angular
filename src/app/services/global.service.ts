import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor(private http: HttpClient) {}

  isLogin = false;
  baseUrl = 'http://localhost:3000/api/';

  getBooks(): Observable<any> {
    return this.http.get(`${this.baseUrl}book/AllBooks`);
  }

  getSingleBook(bookId: any): Observable<any> {
    return this.http.get(`${this.baseUrl}book/${bookId}`);
  }

  register(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}user/Sign_up`, data);
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}user/Sign_in`, data);
  }
}
