import { Component, OnInit } from '@angular/core';
import{DashboardService} from '../services/dashboard.service';
import{ MusicserviceService } from '../services/musicservice.service';
import {Router} from '@angular/router';
import{Favourite} from '../Models/Favourite';
import {FavouriteService} from '../services/favourite.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dashservice:DashboardService,private favservice:FavouriteService,public service:MusicserviceService,private route:Router) { }
  public songs:string;
  public key: string;
  public Uname: string;


  ngOnInit(): void {
    this.key=localStorage.getItem('token');
    this.Uname=localStorage.getItem('user');

    this.dashservice.getPlaylists().subscribe((data:[])=>{
      // console.log(data);
      this.songs=data["tracks"];
    });
  }
  Logout()
  {
    this.route.navigate(['../login']);
    localStorage.clear();
    console.log(localStorage);
  }
  addToFav(id: string, artist: string, title: string,audio:string,coverPic:string){
    var fav = new Favourite();
    fav.id=id;
    fav.ArtistName=artist;
    fav.Title=title;
    fav.Audio=audio;
    fav.Email=this.Uname;
    fav.CoverPic="https://api.napster.com/imageserver/v2/albums/"+fav.id+"/images/200x200.jpg";
    this.favservice.addFavData(fav).subscribe(data=>{
      // console.log("added");
      // console.log(data);
      alert(fav.Title+"added to favourite");
    },
    error=>{alert(fav.Title+" is already added ");}
    );
    // console.log(fav);
  }

}
