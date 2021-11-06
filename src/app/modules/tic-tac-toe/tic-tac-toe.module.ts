import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TicTacToeComponent } from './tic-tac-toe.component';
import { TileFrameComponent } from './tile-frame/tile-frame.component';
import { TileComponent } from './tile/tile.component';

const routes: Routes = [
    {
        path: '',
        component: TicTacToeComponent
    }
]

@NgModule({
    declarations: [
        TicTacToeComponent,
        TileFrameComponent,
        TileComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class TicTacToeModule { }
