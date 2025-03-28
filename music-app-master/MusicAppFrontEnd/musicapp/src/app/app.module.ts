import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import {AuthGuard} from './guards/auth.guard';
import{MusicserviceService} from './services/musicservice.service';
import { RecommendComponent } from './recommend/recommend.component'
import { FavouriteService } from './services/favourite.service';
import{DashboardService} from './services/dashboard.service';
import { RecommendService } from './services/recommend.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DashboardComponent,
    FavouriteComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    RecommendComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard,MusicserviceService,FavouriteService,DashboardService,RecommendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
