export const TETRIS_WIDTH = 10;
export const TETRIS_VISIBLE_HEIGHT = 20;
export const TETRIS_HIDDEN_ROWS = 2;
export const TETRIS_HEIGHT = TETRIS_VISIBLE_HEIGHT + TETRIS_HIDDEN_ROWS;
export type Tetromino = 'I'|'J'|'L'|'O'|'S'|'T'|'Z';
export type Orientation = 0|1|2|3;
import type{RealtimeGameInput}from'../../runtime/core-input.ts';
export interface TetrisActive { id:number; kind:Tetromino; row:number; col:number; orientation:Orientation; groundedTicks:number; lockResets:number }
export interface TetrisState { rulesVersion:'tetris/1'; tick:number; board:Array<Tetromino|null>; active:TetrisActive|null; bag:Tetromino[]; next:Tetromino[]; rng:number; nextId:number; lines:number; score:number; level:number; phase:'playing'|'lost'; softDrop:boolean }
export type TetrisInput=RealtimeGameInput;
export type TetrisRecord={commandId:string;playerId:string;epochId:string;clientSeq:number;tick:number}&(TetrisInput|{type:'progress/tick';payload:{phase:'playing'|'lost';stateHash:string}});
