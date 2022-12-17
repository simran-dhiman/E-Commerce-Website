import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppConstants } from '../model/app-constants';
import { User } from '../model/user';
import { ApiService } from '../service/api.service';
import { LocalStorageService } from '../service/local-storage-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z]{3,50}')]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z]{3,50}')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {

      let user: User = new User();
      user.firstName = this.registerForm.controls['firstName'].value;
      user.lastName = this.registerForm.controls['lastName'].value;
      user.email = this.registerForm.controls['email'].value;
      user.password = this.registerForm.controls['password'].value;

      let password = user.password;

      // this.saveUser(firstName, lastName, email, password);

      this.apiService.register(user).subscribe((user) => {
        console.log("User registered");
        user.password = password;
        this.apiService.login(user).subscribe(user => {
          this.localStorageService.setLoggedInUser(user);
          this.router.navigateByUrl('/');
        });
        // this.router.navigateByUrl('/login');
      }, error => {

      });
    } else {
      alert("Please fill the form properly");
    }
  }

  // saveUser(firstName, lastName, email, password) {
  //   // Get the list of existing users
  //   let users: Array<User> = JSON.parse(localStorage.getItem(AppConstants.USERS));

  //   // Add the new user into the existing list of users
  //   let user: User = new User();
  //   user.firstName = firstName;
  //   user.lastName = lastName;
  //   user.email = email;
  //   user.password = password;
  //   users.push(user);

  //   // Save the users list into localStorage
  //   localStorage.setItem(AppConstants.USERS, JSON.stringify(users));

  //   localStorage.setItem(AppConstants.LOGGED_IN_USER, JSON.stringify(user));
  // }

}
