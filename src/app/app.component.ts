import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  // Title
  title = "Eight Puzzle";

  // Estado alvo
  tagetState: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

  // Inicializa o puzzle com o estado alvo
  puzzle: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

  // Variaveis auxiliares
  emptyCell: number = 9;


  // Executa um movimento
  movement(cell: number, i: number, j: number) {
    switch (cell) {
      case 1: {
        this.swipe(0, 0, 0, 1);
        this.swipe(0, 0, 1, 0);
        console.log("Cliccou em " + cell + " puzzle["+i+"]["+j+"]: " + this.puzzle[i][j]);
        break;
      }
      case 2: {
        this.swipe(0, 1, 0, 0);
        this.swipe(0, 1, 1, 1);
        this.swipe(0, 1, 0, 2);
        console.log("Cliccou em " + cell + " puzzle["+i+"]["+j+"]: " + this.puzzle[i][j]);
        break;
      }
      case 3: {
        this.swipe(0, 2, 0, 1);
        this.swipe(0, 2, 1, 2);
        console.log("Cliccou em " + cell + " puzzle["+i+"]["+j+"]: " + this.puzzle[i][j]);
        break;
      }
      case 4: {
        this.swipe(1, 0, 0, 0);
        this.swipe(1, 0, 1, 1);
        this.swipe(1, 0, 2, 0);
        console.log("Cliccou em " + cell + " puzzle["+i+"]["+j+"]: " + this.puzzle[i][j]);
        break;
      }
      case 5: {
        this.swipe(1, 1, 0, 1);
        this.swipe(1, 1, 1, 0);
        this.swipe(1, 1, 1, 2);
        this.swipe(1, 1, 2, 1);
        console.log("Cliccou em " + cell + " puzzle["+i+"]["+j+"]: " + this.puzzle[i][j]);
        break;
      } 
      case 6: {
        this.swipe(1, 2, 0, 2);
        this.swipe(1, 2, 1, 1);
        this.swipe(1, 2, 2, 2);
        console.log("Cliccou em " + cell + " puzzle["+i+"]["+j+"]: " + this.puzzle[i][j]);
        break;
      }
      case 7: {
        this.swipe(2, 0, 1, 0);
        this.swipe(2, 0, 2, 1);
        console.log("Cliccou em " + cell + " puzzle["+i+"]["+j+"]: " + this.puzzle[i][j]);
        break;
      }
      case 8: {
        this.swipe(2, 1, 2, 0);
        this.swipe(2, 1, 1, 1);
        this.swipe(2, 1, 2, 2);
        console.log("Cliccou em " + cell + " puzzle["+i+"]["+j+"]: " + this.puzzle[i][j]);
        break;
      }
      case 9: {
        this.swipe(2, 2, 1, 2);
        this.swipe(2, 2, 2, 1);
        console.log("Cliccou em " + cell + " puzzle["+i+"]["+j+"]: " + this.puzzle[i][j]);
        break;
      }
    }
  }
  
  // Tenta trocar o ponto (x1, y1) pelo ponto (x2, y2)
  swipe(x1: number, y1: number, x2: number, y2: number) {
    if (this.puzzle[x2][y2] == 9) {
      console.log("Trocou: "+ this.puzzle[x1][y1]+", por "+ this.puzzle[x2][y2]);
      this.puzzle[x2][y2] = this.puzzle[x1][y1];
      this.puzzle[x1][y1] = 9;
      this.emptyCell = x1 * 3 + y1 + 1;
    }
  }

  // Testa se uma celula pode ser visivel
  isVisible(i: number, j: number) {
    return this.puzzle[i][j] != 9;
  }
  
  randomNumber(n) {
    return Math.floor(Math.random() * n);
  }

  randomMove() {
    switch(this.emptyCell) {
      case 1: {
        let move: number = this.randomNumber(2);
        if(move == 0)       
          this.swipe(0, 1, 0, 0);
        else
          this.swipe(1, 0, 0, 0);
        break;
      }
      case 2: {
        let move: number = this.randomNumber(3);
        if(move == 0)
          this.swipe(0, 0, 0, 1);
        else if(move ==1)
          this.swipe(1, 1, 0, 1);
        else
          this.swipe(0, 2, 0, 1);
        break;
      }
      case 3: {
        let move: number = this.randomNumber(2);
        if(move == 0)
          this.swipe(0, 1, 0, 2);
        else 
          this.swipe(1, 2, 0, 2);
        break;
      }
      case 4: {
        let move: number = this.randomNumber(3);
        if(move == 0)
          this.swipe(0, 0, 1, 0);
        else if(move == 1)
          this.swipe(1, 1, 1, 0);
        else
          this.swipe(2, 0, 1, 0);
        break;
      }
      case 5: {
        let move: number = this.randomNumber(4);
        if(move == 0)
          this.swipe(0, 1, 1, 1);
        else if(move == 1)
          this.swipe(1, 0, 1, 1);
        else if(move == 2)
          this.swipe(1, 2, 1, 1);
        else 
          this.swipe(2, 1, 1, 1);
        break;
      } 
      case 6: {
        let move: number = this.randomNumber(3);
        if(move == 0)
          this.swipe(0, 2, 1, 2);
        else if(move == 1)
          this.swipe(1, 1, 1, 2);
        else
          this.swipe(2, 2, 1, 2);
        break;
      }
      case 7: {
        let move: number = this.randomNumber(2);
        if(move == 0)
          this.swipe(1, 0, 2, 0);
        else
          this.swipe(2, 1, 2, 0);
        break;
      }
      case 8: {
        let move: number = this.randomNumber(3);
        if(move == 0)
          this.swipe(2, 0, 2, 1);
        else if(move == 1)
          this.swipe(1, 1, 2, 1);
        else
          this.swipe(2, 2, 2, 1);
        break;
      }
      case 9: {
        let move: number = this.randomNumber(2);
        
        if(move == 0)
          this.swipe(1, 2, 2, 2)
        else 
          this.swipe(2, 1, 2, 2);
        break;
      }
    }
  }

  shuflle(n: number) {
    console.log("Embaralhando");
    for(let i = 0; i < n; i++) {
      console.log("Embaralhando "+ i +", celula vazia: " + this.emptyCell);
      this.randomMove();
    }
  }
}