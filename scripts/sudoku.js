/**
 * History:
 *      2/12/19: Created and Implemented.
 * Description:
 *      A function to determine if the given board state
 *      is a valid sudoku board.
 * Arguments:
 *      board: a 2D, square array, of length 9.
 * Return:
 *      True iff the board is a valid board state for sudoku.
 * 
 */
var states_evaluated;

function is_valid(board) {
    for (let i = 0; i < 9; i++) {
        //Check if Row i Has Only Unique Values
        for (let current = 0; current < 9; current++) {
            for (let test = current; test < 9; test++) {
                if (board[i][current] != 0 && current != test && board[i][current] == board[i][test]) {
                    return false;
                }
            }
        }
        //Check if Column i has all Unique Values
        for (let current = 0; current < 9; current++) {
            for (let test = current; test < 9; test++) {
                if (board[current][i] != 0 && current != test && board[current][i] == board[test][i]) {
                    return false;
                }
            }
        }
    }
    //Check Each Grid
    for (let x_disp = 0; x_disp < 3; x_disp++) {
        for (y_disp = 0; y_disp < 3; y_disp++) {
            if (!check_grid(x_disp * 3, y_disp * 3, board)) {
                return false;
            }
        }
    }
    return true;
}

/**
 * History:
 *      2/12/19: Created and Implemented -Jarod
 * Description:
 *      Checks to see if the 3x3 grid with an upper left corner of (x,y) contains any non-zero duplicates.
 * Arguments:
 *      x: the row of the upper left hand corner of the grid to be examined.
 *      y: the column of the upper left hand corner of the grid to be examined.
 *      board: a 2D, square array, of length 9.
 * Return:
 *      True iff the 3x3 grid does not contain any duplicates.
 * 
 */
function check_grid(x, y, board) {
    for (let current = 0; current < 9; current++) {
        for (let test = current; test < 9; test++) {
            /**
             * Ensure Three Condition:
             *      Own Space is not being tested.
             *      One of the spaces isn't 0.
             *      Both Spaces are equal in value.
             */
            if (current != test && board[x + Math.floor(current / 3)][y + current % 3] != 0 && board[x + Math.floor(current / 3)][y + current % 3] == board[x + Math.floor(test / 3)][y + test % 3]) {
                return false;
            }
        }
    }
    return true;
}

/**
 * History:
 *      2/12/19: Created and Implemented -Jarod
 * Description:
 *      Generates the successors of a give board state, finding the next open spot and pluggin in 1-9 in that spot.
 *      However, immediately prunes successors that result in invalid board states.
 * Arguments:
 *      board: a 2D, square array, of length 9.
 * Return:
 *      An Array of valid boards, with n+1 spaces filled, where n is the number of spaces filled in board.
 * 
 */
function generate_successors(board) {

    //Find Next Spot
    let spot = find_empty_spot(board);
    let row = spot.row;
    let col = spot.col;
    let successors = [];
    //Cycle through 1-9
    for (let i = 1; i < 10; i++) {
        //Copy the Board, and fill in the current value.
        let new_board = board.map(x => x.slice(0));
        new_board[row][col] = i;

        //Add to Successors if it is a valid board state.
        if (is_valid(new_board)) {
            successors.push(new_board);
        }
    }
    return successors;
}

/**
 * History:
 *      2/12/19: Created and Implemented -Jarod
 * Description:
 *      Finds a spot in the board that contains a 0.
 * Arguments:
 *      board: a 2D, square array, of length 9.
 * Return:
 *      Null if there is no spot with a 0, otherwise an object with the following properties:
 *          {
 *              row: the row of the open spot.
 *              col: the column of the open spot.
 *          }
 * 
 */
function find_empty_spot(board) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] == 0) {
                return {
                    row: row,
                    col: col
                };
            }
        }
    }
    return null;
}