import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SingleUserComponent } from './pages/single-user/single-user.component';
import { UsersComponent } from './pages/users/users.component';
import { IndexComponent } from './pages/index/index.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { ErrorComponent } from './pages/error/error.component';
import { BooksComponent } from './pages/books/books.component';
import { SingleBookComponent } from './pages/single-book/single-book.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SingleUserComponent,
    UsersComponent,
    IndexComponent,
    AddUserComponent,
    ErrorComponent,
    BooksComponent,
    SingleBookComponent,
    RegisterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
