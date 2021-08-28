import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogadoComponent } from './logado/logado.component';
import { LoginComponent } from './login/login.component';
import { AuthguardService } from './services/authguard.service';

const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'logado', component: LogadoComponent, canActivate: [AuthguardService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
