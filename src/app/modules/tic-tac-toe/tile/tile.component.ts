import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-tile',
    template: `
        <button [class.winner-tile]="winnerTile">{{playerMark}}</button>
    `,
    styleUrls: ['./tile.component.scss'],
})
export class TileComponent {

    @Input() playerMark: string = '';       // the player's mark X or O
    @Input() winnerTile: boolean = false;   // indicates if this is a tile in the winning pattern

    constructor() { }

}
