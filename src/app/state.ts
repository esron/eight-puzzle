export class State {
    board: number[][] = [];
    heuristic: number = 0;
    emptyCell: number;
    depth: number;
    visited: boolean = false;
    parent: State;   

    constructor(board: number[][], depth) {
        for (let i = 0; i < 3; i++) {
            this.board[i] = [];
            for (let j = 0; j < 3; j++) {
                this.board[i][j] = board[i][j];
            }
        }
        
        this.depth = depth;
        this.hn();
    }

    private manhathanDistance(A: number[], B: number[]) {
        return Math.abs(B[0] - A[0]) + Math.abs(B[1] - A[1]);
    }

    private hn() {
        let newHeuristic: number = 0;
        for (let i = 0; i < 3; i++)
            for (let j = 0; j < 3; j++) {
                switch(this.board[i][j]) {
                    case 1: {
                        newHeuristic += this.manhathanDistance([i, j], [0, 0]);
                        break;
                    }
                    case 2: {
                        newHeuristic += this.manhathanDistance([i, j], [0, 1]);
                        break;
                    }
                    case 3: {
                        newHeuristic += this.manhathanDistance([i, j], [0, 2]);
                        break;
                    }
                    case 4: {
                        newHeuristic += this.manhathanDistance([i, j], [1, 0]);
                        break;
                    }
                    case 5: {
                        newHeuristic += this.manhathanDistance([i, j], [1, 1]);
                        break;
                    }
                    case 6: {
                        newHeuristic += this.manhathanDistance([i, j], [1, 2]);
                        break;
                    }
                    case 7: {
                        newHeuristic += this.manhathanDistance([i, j], [2, 0]);
                        break;
                    }
                    case 8: {
                        newHeuristic += this.manhathanDistance([i, j], [2, 1]);
                        break;
                    }
                    case 9: {
                        this.emptyCell = 3 * i + j + 1;
                    }
                }
            }
        this.heuristic = newHeuristic + this.depth;
    }

    // Tenta trocar o ponto (x1, y1) pelo ponto (x2, y2)
    swipe(x1: number, y1: number, x2: number, y2: number) {
        if (this.board[x2][y2] == 9) {
            console.log("Trocou: "+ this.board[x1][y1]+", por "+ this.board[x2][y2]);
            this.board[x2][y2] = this.board[x1][y1];
            this.board[x1][y1] = 9;
            this.emptyCell = x1 * 3 + y1 + 1;
        }
        this.hn();
        return this;
    }

    logBoard() {
       for (let i = 0; i < 3; i++)
        console.log(this.board[i][0] + " " + this.board[i][1] + " " + this.board[i][2]);
       console.log("h(n) =  "+ this.heuristic +"\n");
       console.log("Profundidade: " + this.depth);
    }
}