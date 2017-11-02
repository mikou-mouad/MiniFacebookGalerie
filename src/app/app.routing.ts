import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profil/profil.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'profil', component: ProfilComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', component: LoginComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
