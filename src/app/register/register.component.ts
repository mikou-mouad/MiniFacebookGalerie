import { User } from './user';
import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
        private router: Router,
        private userService: UserService, ) { }
  model: any = {};
  ngOnInit() {
  }
  deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { });
    }
  add(pass: string, confirm: string): void {
    if ( pass === confirm ) {
        this.userService.create(this.model)
            .subscribe(
                data => {
                    console.log(JSON.stringify(localStorage.getItem('users')));
                    this.router.navigate(['/login']);
                },
                error => {
                    alert('Already registered');
                });
    } else {
      alert('Passwords are not similar');
    }
        }
}
