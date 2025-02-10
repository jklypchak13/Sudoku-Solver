import { Board } from "./board.js";
import { WaveFunctionCollapse } from "./wave_collapse_sort.js";

function read_board_values(): Array<number> {
    let values = [];
    for (let i = 0; i < 81; i++) {
        let element = document.getElementById(`input_pos${i}`)! as HTMLInputElement;
        let current = parseInt(element.value, 10);
        if (isNaN(current) || current < 1 || current > 9) {
            current = 0;
        }
        values.push(current);
    }
    return values;
}
//Link Depth First Search Button and Function.
let current_button = document.getElementById("depth_first")!;
current_button.addEventListener("click", function () {
    let board_values = read_board_values();
    let board = new Board(board_values);
    let solution = new WaveFunctionCollapse();
    let result = solution.solve(board);
    console.log(result);
    if (result != null) {
        result.output();
    } else {
        board.output();
    }
});

//Link Clear Input Board Button and Function.
current_button = document.getElementById("clearI")!;
current_button.addEventListener("click", function () {
    clear_board(0);
});

//Link Clear Output Board Button and Function.
current_button = document.getElementById("clearO")!;
current_button.addEventListener("click", function () {
    clear_board(1);
});

function clear_board(board_number: number) {
    if (board_number == 0) {
        for (let i = 0; i < 81; i++) {
            document.getElementById("input_pos" + i)!.innerHTML = "";
        }
    } else {
        for (let i = 0; i < 81; i++) {
            document.getElementById("output_pos" + i)!.innerHTML = "";
        }
    }
}
