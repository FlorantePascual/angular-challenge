import { Component } from '@angular/core';

@Component({
    selector: 'app-tile-frame',
    templateUrl: './tile-frame.component.html',
    styleUrls: ['./tile-frame.component.scss'],
})
export class TileFrameComponent {

    // variables for basic specs
    tiles = new Array(9);   // equivalent to 3x3 matrix
    nextPlayer = 'X';
    winner = '';
    gameTie = false;

    // variables for enhanced UI/UX
    audioWinner   = new Audio('assets/mp3/winner.mp3');
    audioGameOver = new Audio('assets/mp3/gameover.mp3');
    winningTiles: number[] = [];    // will contain winning tiles for css highlighting

    constructor() { }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Check if a winner exists
     * 
     * @returns boolean
     */
    private checkWinner(): boolean {

        const winnerMatrix = [
            [0,1,2], [3,4,5], [6,7,8],  // horizontal winners
            [0,3,6], [1,4,7], [2,5,8],  // vertical
            [0,4,8], [6,4,2]            // diagonal
        ];

        for (let i=0; i<winnerMatrix.length; i++) {

            const [a, b, c] = winnerMatrix[i];

            if (
                this.tiles[a] &&
                this.tiles[a] === this.tiles[b] &&
                this.tiles[a] === this.tiles[c]
            ) {
                this.winner = this.tiles[a];
                this.winningTiles = winnerMatrix[i];
                return true;
            }
        }

        if (this.tiles.join('').length===9) {   // check if tie
            this.gameTie = true;
        }

        return false;

    }

    /**
     * Toggle to get the next player
     * 
     * @returns void
     */
    private getNextPlayer(): void {
        this.nextPlayer = this.nextPlayer === 'X' ? 'O' : 'X';
    }


    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Reset variables for new game
     * 
     * @returns void
     */
    resetGame(): void {
        this.tiles = new Array(9);
        if (this.winner) {
            this.nextPlayer = this.winner;  // winner gets to play first
        } else {
            this.getNextPlayer();           // toggle first player on click reset
        }
        this.winner = '';
        this.gameTie = false;
    }

    /**
     * Tile Click Handler
     * 
     * @param tileIndex - index of the clicked tile
     * @returns void
     */
    onTileClick(tileIndex: number): void {

        if (this.tiles[tileIndex] || this.winner) return;

        this.tiles.splice(tileIndex, 1, this.nextPlayer);
        this.getNextPlayer();

        // play sound
        if (this.checkWinner()) {
            this.audioWinner.play();
        } else if (this.gameTie) {
            this.audioGameOver.play();
        }
    }

    /**
     * Check if tile belongs to winning tiles pattern
     * for CSS styling
     * 
     * @param tileIndex - index of the tile being tested
     * @returns boolean
     */
    isWinningTile(tileIndex: number): boolean {
        return this.winningTiles.indexOf(tileIndex) >= 0;
    }

}
