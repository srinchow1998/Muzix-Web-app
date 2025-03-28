import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) {


  }
  routeToLogin() {
    this.router.navigate(['login']);

  }
  isTokenNull(){
    let status=localStorage.getItem('localtoken');
    if(status!=null){
      return true;
    }
    else{
      return false;
    }
  }


}
