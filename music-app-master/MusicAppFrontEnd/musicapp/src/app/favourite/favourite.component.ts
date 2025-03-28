import { Component, OnInit } from '@angular/core';
import{FavouriteService} from '../services/favourite.service';
import{Router} from '@angular/router';
import { Favourite } from '../Models/Favourite';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  public favs:any;
  // Array<Favourite>;
  public key: string;
  public Uname: string;

  constructor(public service: FavouriteService,private router:Router) { }

  ngOnInit() {
    this.key = localStorage.getItem('localtoken');
    this.Uname = localStorage.getItem('user');

    this.service.getFavData(this.Uname,this.key).subscribe(data => {
      // console.log(data)
      this.favs = data;
      // console.log(this.favs);
    });
  }
 

  delFav(t: string) {
    this.service.delFav(t,this.key).subscribe(data => {
      console.log(data);
      this.service.getFavData(this.Uname,this.key).subscribe(data => {
        this.favs = data;
        console.log(this.favs);
      });
    });
  }


}
