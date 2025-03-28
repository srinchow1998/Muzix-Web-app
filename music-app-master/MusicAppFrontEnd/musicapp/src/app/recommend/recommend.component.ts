import { Component, OnInit } from '@angular/core';
import{RecommendService} from '../services/recommend.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css']
})
export class RecommendComponent implements OnInit {
  public recs;
  public key: string;
  public Uname: string;
  constructor(public rec_service: RecommendService,private router:Router) { }

  ngOnInit(): void {
    this.key=localStorage.getItem('localtoken');
    this.Uname=localStorage.getItem('user');

    this.rec_service.getData(this.key).subscribe((data:[])=>{
      // console.log(data);
      this.recs=data;
    });
  }

}
