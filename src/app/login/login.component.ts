import { User } from '../register/user';
import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isArray } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
        private router: Router,
        private userService: UserService, ) { }
  model: any = {};
  ngOnInit() {

  }
  logIn(name: string, pass: string): void {
    const users: any[] = JSON.parse(localStorage.getItem('users')) || [];
    if ( users.length === 0 ) {
      alert('No registered user');
    } else {
           let k = 0;
           let filteredUsers;
           if ( Array.isArray(users)) {
              filteredUsers = users.filter(user => user.username === name && user.password === pass);
           } else {
              filteredUsers = JSON.parse(localStorage.getItem('users')) as User;
              if ( filteredUsers.username !== name || filteredUsers.password !== pass) {
                k = 1;
              }
            }
          if (filteredUsers.length === 0 || k === 1) {
               alert('username or password incorrect');
           } else {
               localStorage.setItem('currentUser', JSON.stringify(filteredUsers));
               this.router.navigate(['/profil']);
          }
    }
    }
  }
