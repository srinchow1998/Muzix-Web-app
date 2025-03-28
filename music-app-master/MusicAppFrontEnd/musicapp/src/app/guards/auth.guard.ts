import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {MusicserviceService} from '../services/musicservice.service';
import{Router} from '@angular/router';
import { RouterService } from '../services/router.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router,private service:RouterService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      // console.log('canActivate');
    if(this.service.isTokenNull()){
      // console.log("true");
      return true;
    }
    else{
      this.service.routeToLogin();
      return false;
    }
    
  }
    
}
