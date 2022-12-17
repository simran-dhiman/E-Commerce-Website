import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppConstants } from '../model/app-constants';
import { User } from '../model/user';
import { ApiService } from '../service/api.service';
import { LocalStorageService } from '../service/local-storage-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      let email = this.loginForm.controls['email'].value;
      let password = this.loginForm.controls['password'].value;

      // let authenticated = this.authenticateUser(email, password);

      let user: User = new User();
      user.email = email;
      user.password = password;
      this.apiService.login(user).subscribe((user: User) => {
        this.localStorageService.setLoggedInUser(user);
        this.router.navigateByUrl('/');
      }, error => {

      });

    }
  }

  // authenticateUser(email, password): boolean {
  //   let userList: Array<User> = JSON.parse(localStorage.getItem(AppConstants.USERS));
  //   for (let user of userList) {
  //     if (email === user.email && password === user.password) {
  //       localStorage.setItem(AppConstants.LOGGED_IN_USER, JSON.stringify(user));
  //       return true;
  //     }
  //   }

  //   return false;
  // }

}
