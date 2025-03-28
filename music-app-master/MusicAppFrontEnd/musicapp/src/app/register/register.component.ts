import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { User } from '../Models/User';
import {MusicserviceService} from '../services/musicservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   register = this.fb.group({
    userid: ['',Validators.required],
    username: ['',Validators.required],
    password: ['',Validators.required],
    email: ['',Validators.required]
   })
  alert: boolean
  constructor(private service:MusicserviceService,private route:Router,private fb:FormBuilder) { }
  x:User;
  message='';
  ngOnInit(): void {
  }

  addmember(){
    this.x=new User();
    this.x.userid=this.register.get('userid').value;
    this.x.username=this.register.get('username').value;
    this.x.email=this.register.get('email').value;
    this.x.password=this.register.get('password').value;
    this.service.addUser(this.x).subscribe(
      data=>{this.message=data;console.log(data);
        this.alert=true;
        alert("Registered Successfully");
    this.route.navigate(['login']);
      },
      error=>{this.message=error;alert("User Already exists");})
      
 this.register.reset();
    
  }

  closeAlert(){
    this.alert=false;
  }
}
