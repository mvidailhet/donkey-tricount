import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, User } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isLoading = false;
  users: User[];

  constructor(private router: Router, private api: ApiService, private userService: UserService) {}

  ngOnInit(): void {
    this.api.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }



  login = async (user: User) => {
    this.userService.user = user;
    await this.router.navigate(['/logged'], { replaceUrl: true });
    this.isLoading = false;
  };
}
