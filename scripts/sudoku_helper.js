//Link Depth First Search Button and Function.
let current_button = document.getElementById("depth_first");
current_button.addEventListener("click", function() {
    states_evaluated = 0;
    let board = depth_first_search(read_board());
    if (board == null) {
        console.log("ERROR, unsolvable board.");
    } else {
        output_board(board);
        document.getElementById("states").textContent = states_evaluated;
    }
});

//Link Clear Input Board Button and Function.
current_button = document.getElementById("clearI");
current_button.addEventListener("click", function() {
    clear_board(0);
});

//Link Clear Output Board Button and Function.
current_button = document.getElementById("clearO");
current_button.addEventListener("click", function() {
    clear_board(1);
});

/**
 * History:
 *      2/12/19: Created and Implemented -Jarod
 * Description:
 *      Reads the Current Input Board, filling empty spaces with 0's
 * Arguments:
 *      None.
 * Return:
 *      a 9x9 array, corresponding to the state of the input board on the HTML document.
 * 
 */
function read_board() {
    //Construct the 2D Array
    let board = [];
    for (let j = 0; j < 9; j++) {
        board.push([]);
    }

    //Cycle through Each Spot in the Board
    for (let i = 0; i < 81; i++) {
        let current = parseInt(document.getElementById("input_pos" + i).value, 10);
        if (isNaN(current) || current < 1 || current > 9) {
            board[Math.floor(i / 9)][i % 9] = 0;
        } else {
            board[Math.floor(i / 9)][i % 9] = current;
        }
    }
    return board;
}

/**
 * History:
 *      2/12/19: Created and Implemented -Jarod
 * Description:
 *      Writes the given board to the output board.
 * Arguments:
 *      board: the board to be written to output.
 * Return:
 *      None.
 * 
 */
function output_board(board) {
    for (let i = 0; i < 81; i++) {
        document.getElementById("output_pos" + i).value = board[Math.floor(i / 9)][i % 9];
    }
}

/**
 * History:
 *      2/12/19: Created and Implemented -Jarod
 * Description:
 *     Clears the specified board, putting each cell as the empty string.
 * Arguments:
 *      board_number: 0 or 1
 *          0: Clear the Input Board.
 *          1: Clear the Output Board.
 * Return:
 *      None.
 * 
 */
function clear_board(board_number) {
    if (board_number == 0) {
        for (let i = 0; i < 81; i++) {
            document.getElementById("input_pos" + i).value = "";
        }
    } else {
        for (let i = 0; i < 81; i++) {
            document.getElementById("output_pos" + i).value = "";
        }
    }

}