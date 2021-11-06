import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [

    // Redirect empty path to '/home'
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },

    // initial landing page: Eager-loaded
    {
        path: 'home',
        component: HomeComponent
    },

    // Lazy load tictactoe module
    {
        path: 'tictactoe',
        loadChildren: () => import('./modules/tic-tac-toe/tic-tac-toe.module').then(m=>m.TicTacToeModule)
    },

    // Redirect unknown paths to /home
    {
        path: '**',
        redirectTo: 'home'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
