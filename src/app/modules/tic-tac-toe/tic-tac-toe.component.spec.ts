import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicTacToeComponent } from './tic-tac-toe.component';
import { TileFrameComponent } from './tile-frame/tile-frame.component';

describe('TicTacToeComponent', () => {
    let component: TicTacToeComponent;
    let fixture: ComponentFixture<TicTacToeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        declarations: [ TicTacToeComponent, TileFrameComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TicTacToeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
