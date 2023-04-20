import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { UsersComponent } from './pages/users/users.component';
import { SingleUserComponent } from './pages/single-user/single-user.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { ErrorComponent } from './pages/error/error.component';
import { BooksComponent } from './pages/books/books.component';
import { SingleBookComponent } from './pages/single-book/single-book.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  {
    path: 'books',
    children: [
      { path: '', component: BooksComponent },
      { path: ':bookId', component: SingleBookComponent },
    ],
  },
  {
    path: 'users',
    children: [
      { path: '', component: UsersComponent },
      { path: 'addUser', component: AddUserComponent },
      { path: ':userId', component: SingleUserComponent },
    ],
  },
  { path: 'SignUp', component: RegisterComponent },
  { path: 'SignIn', component: LoginComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
