import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page'
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Home details'
    },
    {
      path: 'register',
      component: RegisterComponent,
      title: 'Register'
    },
    {
      path: 'login',
      component: LoginComponent,
      title: 'Login'
    },

  ];
  
  export default routeConfig;