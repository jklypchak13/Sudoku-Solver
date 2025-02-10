import Cell from "./cell.js";
function compare_cells(cells) {
    for (let cell of cells) {
        if (!cell.collapsed) {
            continue;
        }
        for (let other of cells) {
            if (cell.id == other.id) {
                continue;
            }
            let index = other.options.indexOf(cell.value);
            if (index >= 0) {
                other.options.splice(index, 1);
            }
        }
    }
}
export class Board {
    constructor(values) {
        this.cells = [];
        for (let i = 0; i < values.length; i++) {
            this.cells.push(new Cell(i, values[i]));
        }
        this.trim_options();
    }
    output() {
        for (let cell of this.cells) {
            let element = document.getElementById(`output_pos${cell.id}`);
            element.value = cell.value != 0 ? cell.value.toString() : cell.options.toString();
        }
    }
    get_cell(row, column) {
        return this.cells[row * 9 + column];
    }
    get_values() {
        return this.cells.map((cell) => (cell.collapsed ? cell.value : 0));
    }
    get_cells_entropy() {
        return [...this.cells].sort((a, b) => a.get_entropy() - b.get_entropy());
    }
    trim_options() {
        /* rows */
        for (let i = 0; i < 9; i++) {
            let row = this.cells.filter((cell) => {
                return cell.row == i;
            });
            let column = this.cells.filter((cell) => {
                return cell.column == i;
            });
            compare_cells(row);
            compare_cells(column);
        }
        /* squares, loop over the center points of each 3x3 grid */
        for (let i = 1; i < 9; i += 3) {
            for (let j = 1; j < 9; j += 3) {
                let cells = [];
                /* loop over each element in the 3x3 */
                for (let dx = -1; dx < 2; dx += 1) {
                    for (let dy = -1; dy < 2; dy += 1) {
                        cells.push(this.get_cell(i + dx, j + dy));
                    }
                }
                compare_cells(cells);
            }
        }
    }
}
