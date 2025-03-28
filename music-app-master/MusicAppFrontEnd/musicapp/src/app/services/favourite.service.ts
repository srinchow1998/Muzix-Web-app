import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import{Favourite} from '../Models/Favourite';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
Url="http://localhost:50473/api/Favorite/Add"
Url2="";
  constructor(private http:HttpClient) { }

  // addFavData(favorite: Favourite,token: string): Observable<any>{
  //    const options = {headers: {'Content-Type': 'application/json',Authorization: 'Bearer' + localStorage['localtoken']}};
  //   return this.http.post(this.Url,favorite,options);
  // }
  addFavData(body){
    
var tokenValue=new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('localtoken')});
return this.http.post(this.Url,body,{headers:tokenValue}); 

}

  // getFavData(email: string,token:string){
  //   const options = {headers: {'Content-Type': 'application/json',Authorization: 'Bearer' +  localStorage['localtoken']}};
  //   return this.http.get(`http://localhost:50473/api/Favorite/${email}`,options);
  // }
  getFavData(email: string,token:string){ 
   
    return this.http.get<Array<Favourite>>(`http://localhost:50473/api/Favorite/${email}`,{headers:new HttpHeaders().set('Authorization',`Bearer ${token}`)})
    // const options = {headers: {'Content-Type': 'application/json',Authorization: 'Bearer' + localStorage['localtoken'] }};
    // return this.http.get(`http://localhost:50473/api/Favorite/${email}`,options);
  }

  delFav(track: string,token:string){
    const options = {headers: {'Content-Type': 'application/json',Authorization: 'Bearer ' +  localStorage['localtoken']}};
    return this.http.delete(`http://localhost:50473/api/Favorite/${track}`,options);
  }

}
