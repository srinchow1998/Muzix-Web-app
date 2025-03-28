import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
Url="http://localhost:4554/api/DashBoard";
  constructor(private http:HttpClient) { }
  getPlaylists():Observable<Object[]>
  {
   return this.http.get<Object[]>(this.Url);
}
}
