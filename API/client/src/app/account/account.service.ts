import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, of, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUser } from '../shared/models/IUser';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  baseUrl = 'https://localhost:7201/api/';

  private currentUserSource = new BehaviorSubject<IUser | null>(null);

  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  login(values: any) {
    return this.http.post(this.baseUrl + 'account/login', values).pipe(
      map((user: IUser | any) => {
        if (user) {
          localStorage.setItem('token', user.token);
          this.currentUserSource.next(user);
         
        }
      })
    );
  }

  register(values: any) {
    return this.http.post(this.baseUrl + 'account/register', values).pipe(
      map((user: IUser | any) => {
        if (user) {
          localStorage.setItem('token', user.token);
        }
      })
    );
  }

  loadCurrentUser(token: string) {
    if (token === null)
    {
      this.currentUserSource.next( null);
      return of(null || undefined);
    }
    let headers = new HttpHeaders();
    headers = headers.set('Authorazation', `Bearer ${token}`);
    return this.http.get( this.baseUrl+ 'account', { headers }).pipe(
      map((user: IUser | any) => {
        if(user) {
          localStorage.setItem('token', user.token);
          this.currentUserSource.next(user || null);
        }

      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUserSource.next(null);
    this.router.navigateByUrl('/');
  }

  checkEmailExists(email: string) {
    return this.http.get(this.baseUrl + 'account/emailexists?email=' + email);
  }
}
