import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import{Favourite} from '../Models/Favourite';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecommendService {

  constructor(private http:HttpClient) { }

  getData(token:string): Observable<any>{
    return this.http.get<Array<Favourite>>(`http://localhost:50473/api/Favorite/GetAllFavs`,{headers:new HttpHeaders().set('Authorization',`Bearer ${token}`)})
  }

}
