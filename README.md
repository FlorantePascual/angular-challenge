# Angular Challenge

## Tic Tac Toe Specs

1. The game is played on a 3 by 3 grid of squares.
2. One player is assigned the symbol "X" and the other player is assigned the symbol "O".
3. Players take turns. On a player's turn they must put their symbol in an empty square.
4. If a player has three of their symbol in a row, column or diagonal, they win the game.
5. If no empty squares remain, and no player has won, then the game is declared a tie.

## Extra Features

On top of the basic specifications, the following features were added for improved usability:

1. Players can choose who goes first (X or O) by toggling the Reset Game button.

2. In the event of a winner, a sound is played as an audio cue.

3. In addition to winner sound cue, the winning tiles also change color as a visual cue to easily spot the winning pattern.

4. A 'game over' sound is also played in case of a tie.

5. The winner gets to play first on the next round, but this can be toggled with the Reset Game button.

6. No tiles can be selected further in the event of a winner or tie.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/` on your browser. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
