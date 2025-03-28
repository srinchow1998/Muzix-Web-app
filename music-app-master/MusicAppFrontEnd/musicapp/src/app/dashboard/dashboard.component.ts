import { Component, OnInit } from '@angular/core';
import{MusicserviceService} from '../services/musicservice.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service:MusicserviceService,private route:Router) { }

  ngOnInit(): void {
  }
logout(){
  this.route.navigate(['../login']);
  localStorage.clear();
  alert("Logged Out Successfully");
  // console.log(localStorage);
}
}
