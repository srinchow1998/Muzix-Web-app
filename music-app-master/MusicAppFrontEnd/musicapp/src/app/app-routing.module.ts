import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{FavouriteComponent} from './favourite/favourite.component';
import{DashboardComponent} from './dashboard/dashboard.component';
import{LoginComponent} from './login/login.component';
import{RegisterComponent} from './register/register.component'
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import{RecommendComponent} from './recommend/recommend.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'favourite',component:FavouriteComponent,canActivate:[AuthGuard]},
  {path:'dashboard',component:DashboardComponent},
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent,canActivate:[AuthGuard]},
  {path:"recommend",component:RecommendComponent,canActivate:[AuthGuard]},
  {path:'',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
