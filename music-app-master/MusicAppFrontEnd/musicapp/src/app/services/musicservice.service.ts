import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../Models/User';
import{Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MusicserviceService {
  private loginStatus = new BehaviorSubject<boolean>(this.loggedIn());
  constructor(private http:HttpClient,private route:Router) { }

  addUser(user:any):Observable<any>
  {
    return this.http.post<any>("http://localhost:50207/api/Auth/register",user);
  }

  getUser(user:User):Observable<any>
  {
    return this.http.post<any>("http://localhost:50207/api/Auth/login",user);
  }

  
  loggedIn(){
  //  return !!localStorage.getItem('localtoken');
  
  //  const options = {headers: {'Content-Type': 'application/json',Authorization: 'Bearer ' +  localStorage['localtoken']}};
  //  console.log(options);
   if(localStorage.getItem('localtoken')!=null){

     return true;
   }
   else{

     return false;
   }
  }
 isLoggesIn() 
  {
      return this.loginStatus.asObservable();
  }

  // loggedOut()
  // {
  //   localStorage.removeItem('token');
  //   localStorage.removeItem('user');
  //   localStorage.setItem('loginStatus', '0');
  //   this.route.navigate(['/login']);
  //   alert("Logged Out Successfully");
  // }
}
