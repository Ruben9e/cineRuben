import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './vistas/register/register.component';
import { HomeComponent } from './vistas/home/home.component';
import { MoviesComponent } from './vistas/movies/movies.component';
import { ProfileComponent } from './vistas/profile/profile.component';
import { FavoritesComponent } from './vistas/favorites/favorites.component';
import { PosterComponent } from './vistas/poster/poster.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent },
    { path: 'movies', component: MoviesComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'favorites', component: FavoritesComponent },
    { path: 'poster/:id', component: PosterComponent },
];
