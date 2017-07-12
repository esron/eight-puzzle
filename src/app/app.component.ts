import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: ['']
})
export class AppComponent {
  tagetState
  // Inicializa o puzzle com o estado alvo
  puzzle: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

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
        break;
      }
    }
  }
  
  // Tenta trocar o ponto (x1, y1) pelo ponto (x2, y2)
  swipe(x1: number, y1: number, x2: number, y2: number) {
    if (this.puzzle[x2][y2] == 9) {
      this.puzzle[x2][y2] = this.puzzle[x1][y1];
      this.puzzle[x1][y1] = 9;
    }
  }

  // Testa se uma celula pode ser visivel
  isVisible(i: number, j: number) {
    return this.puzzle[i][j] != 9;
  } 
}
