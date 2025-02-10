import { Board } from "./board.js";
export class WaveFunctionCollapse {
    solve(board) {
        let cells = board.get_cells_entropy();
        /* solve the first cell */
        let current = cells[0];
        /* if the first cell is collapsed, the puzzle is solved. */
        if (current.collapsed) {
            return board;
        }
        /* if entropy is 0, there are no possible options. we need to backtrack */
        if (current.get_entropy() <= 0) {
            return null;
        }
        let values = board.get_values();
        for (let option of current.options) {
            values[current.id] = option;
            let board_copy = new Board(values);
            let result = this.solve(board_copy);
            if (result != null) {
                return result;
            }
        }
        /* we didn't find a valid solution, backtrack and hope for this best */
        return null;
    }
}
