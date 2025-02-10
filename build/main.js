import { Board } from "./board.js";
function get_values_from_string(data) {
    let result = data.split("").map((value) => parseInt(value));
    return result;
}
function get_empty_values() {
    let result = [];
    for (let i = 0; i < 81; i++) {
        result.push(0);
    }
    return result;
}
let values = get_empty_values();
let board = new Board(values);
console.log(board);
