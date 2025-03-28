import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, Validators } from '@angular/forms';
import { LogIn } from '../Models/LogIn';
import { MusicserviceService } from '../services/musicservice.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  alert: boolean;
  constructor(private fb: FormBuilder, private service: MusicserviceService, private route: Router) { }

  token: any;
  x: LogIn;
  message = '';
  users: any;
  ngOnInit(): void {

  }
  onSubmit() {
    
    // console.log("login: " + this.login.value['email']);
    console.log("login:" + this.login.value['password']);
    localStorage.setItem('user', this.login.value['email']);
    // console.log(localStorage.getItem('user'));
    if (!this.login.invalid) {
      this.service.getUser(this.login.value).subscribe(data => {
        this.token = data;
        window.localStorage.setItem('localtoken', this.token['token']);
        var aValue = localStorage.getItem('localtoken');
        // console.log(aValue);
        this.route.navigate(['../home']);
      },
        error => { this.message = 'Failed to Login!!';
        alert("invalid credentials45");
      });
    }
    else {
      alert("invalid credentials");
      this.message = "Invalid username or password!!!";

    }
    this.clearForm();
  }
  clearForm() {
    this.login.reset();
  }
}
