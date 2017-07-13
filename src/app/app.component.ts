import { element } from 'protractor';
import { Component } from '@angular/core';

import { State } from './state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  puzzle: State;
  title = "Eight Puzzle";

  // Variaveis auxiliares
  emptyCell: number = 9;

  constructor() {
    // Inicializa o puzzle com o estado alvo
    this.puzzle = new State([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 0);
    // this.shuflle(50);
  }


  // Executa um movimento
  movement(cell: number, i: number, j: number) {
    console.log("Cliccou ne célula " + cell);
    switch (cell) {
      case 1: {
        this.puzzle.swipe(0, 0, 0, 1);
        this.puzzle.swipe(0, 0, 1, 0);
        break;
      }
      case 2: {
        this.puzzle.swipe(0, 1, 0, 0);
        this.puzzle.swipe(0, 1, 1, 1);
        this.puzzle.swipe(0, 1, 0, 2);
        break;
      }
      case 3: {
        this.puzzle.swipe(0, 2, 0, 1);
        this.puzzle.swipe(0, 2, 1, 2);
        break;
      }
      case 4: {
        this.puzzle.swipe(1, 0, 0, 0);
        this.puzzle.swipe(1, 0, 1, 1);
        this.puzzle.swipe(1, 0, 2, 0);
        break;
      }
      case 5: {
        this.puzzle.swipe(1, 1, 0, 1);
        this.puzzle.swipe(1, 1, 1, 0);
        this.puzzle.swipe(1, 1, 1, 2);
        this.puzzle.swipe(1, 1, 2, 1);
        break;
      } 
      case 6: {
        this.puzzle.swipe(1, 2, 0, 2);
        this.puzzle.swipe(1, 2, 1, 1);
        this.puzzle.swipe(1, 2, 2, 2);
        break;
      }
      case 7: {
        this.puzzle.swipe(2, 0, 1, 0);
        this.puzzle.swipe(2, 0, 2, 1);
        break;
      }
      case 8: {
        this.puzzle.swipe(2, 1, 2, 0);
        this.puzzle.swipe(2, 1, 1, 1);
        this.puzzle.swipe(2, 1, 2, 2);
        break;
      }
      case 9: {
        this.puzzle.swipe(2, 2, 1, 2);
        this.puzzle.swipe(2, 2, 2, 1);
        break;
      }
    }
  }

  // Testa se uma celula pode ser visivel
  isVisible(i: number, j: number) {
    return this.puzzle.board[i][j] != 9;
  }
  
  randomNumber(n) {
    return Math.floor(Math.random() * n);
  }

  randomMove() {
    switch(this.puzzle.emptyCell) {
      case 1: {
        let move: number = this.randomNumber(2);
        if(move == 0)       
          this.puzzle.swipe(0, 1, 0, 0);
        else
          this.puzzle.swipe(1, 0, 0, 0);
        break;
      }
      case 2: {
        let move: number = this.randomNumber(3);
        if(move == 0)
          this.puzzle.swipe(0, 0, 0, 1);
        else if(move ==1)
          this.puzzle.swipe(1, 1, 0, 1);
        else
          this.puzzle.swipe(0, 2, 0, 1);
        break;
      }
      case 3: {
        let move: number = this.randomNumber(2);
        if(move == 0)
          this.puzzle.swipe(0, 1, 0, 2);
        else 
          this.puzzle.swipe(1, 2, 0, 2);
        break;
      }
      case 4: {
        let move: number = this.randomNumber(3);
        if(move == 0)
          this.puzzle.swipe(0, 0, 1, 0);
        else if(move == 1)
          this.puzzle.swipe(1, 1, 1, 0);
        else
          this.puzzle.swipe(2, 0, 1, 0);
        break;
      }
      case 5: {
        let move: number = this.randomNumber(4);
        if(move == 0)
          this.puzzle.swipe(0, 1, 1, 1);
        else if(move == 1)
          this.puzzle.swipe(1, 0, 1, 1);
        else if(move == 2)
          this.puzzle.swipe(1, 2, 1, 1);
        else 
          this.puzzle.swipe(2, 1, 1, 1);
        break;
      } 
      case 6: {
        let move: number = this.randomNumber(3);
        if(move == 0)
          this.puzzle.swipe(0, 2, 1, 2);
        else if(move == 1)
          this.puzzle.swipe(1, 1, 1, 2);
        else
          this.puzzle.swipe(2, 2, 1, 2);
        break;
      }
      case 7: {
        let move: number = this.randomNumber(2);
        if(move == 0)
          this.puzzle.swipe(1, 0, 2, 0);
        else
          this.puzzle.swipe(2, 1, 2, 0);
        break;
      }
      case 8: {
        let move: number = this.randomNumber(3);
        if(move == 0)
          this.puzzle.swipe(2, 0, 2, 1);
        else if(move == 1)
          this.puzzle.swipe(1, 1, 2, 1);
        else
          this.puzzle.swipe(2, 2, 2, 1);
        break;
      }
      case 9: {
        let move: number = this.randomNumber(2);
        if(move == 0)
          this.puzzle.swipe(1, 2, 2, 2)
        else 
          this.puzzle.swipe(2, 1, 2, 2);
        break;
      }
    }
  }

  shuflle(n: number) {
    if(n != 0){
        console.log("Embaralhando "+ (50 - n) +", celula vazia: " + this.puzzle.emptyCell);
        this.randomMove();
        window.setTimeout(() => this.shuflle(n - 1), 100);
    }
  }

  compareHeuristc(a: State, b: State) {
    return a.heuristic - b.heuristic;
  }

  // Gera os estados a partir de um estado e adiciona à borda
  expandBorder(state: State) {
    // Lista auxiliar
    let lst: State[] = [];

    // Variável auxíliar
    let newState: State;

    switch(state.emptyCell) {
      case 1: {
        newState = new State(state.board, state.depth + 1);
        lst.push(newState.swipe(0, 1, 0, 0));
        newState = new State(state.board, state.depth + 1);
        lst.push(newState.swipe(1, 0, 0, 0));
        return lst;
      }
      case 2: {
        newState = new State(state.board, state.depth + 1);
        lst.push(newState.swipe(0, 0, 0, 1));
        newState = new State(state.board, state.depth + 1);
        lst.push(newState.swipe(0, 2, 0, 1));
        newState = new State(state.board, state.depth + 1);
        lst.push(newState.swipe(1, 1, 0, 1));
        return lst;
      }
      case 3: {
        newState = new State(state.board, state.depth + 1);
        lst.push(newState.swipe(0, 1, 0, 2));
        newState = new State(state.board, state.depth + 1);
        lst.push(newState.swipe(1, 2, 0, 2));
        return lst;
      }
      case 4: {
        newState = new State(state.board, state.depth + 1);
        lst.push(newState.swipe(0, 0, 1, 0));
        newState = new State(state.board, state.depth + 1);
        lst.push(newState.swipe(1, 1, 1, 0));
        newState = new State(state.board, state.depth + 1);
        lst.push(newState.swipe(2, 0, 1, 0));
        return lst;
      }
      case 5: {
        newState = new State(state.board, state.depth + 1);
        lst.push(newState.swipe(0, 1, 1, 1));
        newState = new State(state.board, state.depth + 1);
        lst.push(newState.swipe(1, 0, 1, 1));
        newState = new State(state.board, state.depth + 1);
        lst.push(newState.swipe(1, 2, 1, 1));
        newState = new State(state.board, state.depth + 1);
        lst.push(newState.swipe(2, 1, 1, 1));
        return lst;
      }
      case 6: {
        newState = new State(state.board, state.depth + 1);
        lst.push(newState.swipe(0, 2, 1, 2));
        newState = new State(state.board, state.depth + 1);
        lst.push(newState.swipe(1, 1, 1, 2));
        newState = new State(state.board, state.depth + 1);
        lst.push(newState.swipe(2, 2, 1, 2));
        return lst;
      }
      case 7: {
        newState = new State(state.board, state.depth + 1);
        lst.push(newState.swipe(1, 0, 2, 0));
        newState = new State(state.board, state.depth + 1);
        lst.push(newState.swipe(2, 1, 2, 0));
        return lst;
      }
      case 8: {
        newState = new State(state.board, state.depth + 1);
        lst.push(newState.swipe(1, 1, 2, 1));
        newState = new State(state.board, state.depth + 1);
        lst.push(newState.swipe(2, 0, 2, 1));
        newState = new State(state.board, state.depth + 1);
        lst.push(newState.swipe(2, 2, 2, 1));
        return lst;
      }
      case 9: {
        newState = new State(state.board, state.depth + 1);
        lst.push(newState.swipe(1, 2, 2, 2));
        newState = new State(state.board, state.depth + 1);
        lst.push(newState.swipe(2, 1, 2, 2));
        return lst;
      }
    }
  }

  solvePuzzle() {
    console.log("Resolvendo");

    // Estado corrente
    let currentState: State = new State(this.puzzle.board, 0);

    // Borda
    let border: State[] = [];

    this.expandBorder(currentState).forEach(element => { border.push(element) });

    border.sort(this.compareHeuristc);

    border.forEach(element => { element.logBoard() });
  }
}