/**
 * History:
 *      2/12/19: Created and Implemented -Jarod
 * Description:
 *      A function to find the solution to a Sudoku using a Depth-First Algorithm.
 * Arguments:
 *      board: a 2D, square array, of length 9, representing a Sudoku Board
 *              The board must be valid.
 * Return:
 *      Returns the solved board, or null if the board in this position is unsolvable.
 * 
 */
function depth_first_search(board) {
    states_evaluated++;
    //Check if the Board is Finished (Base Case)
    if (find_empty_spot(board) == null) {
        return board;
    }

    //Generate Successors
    let children = generate_successors(board);

    //Depth_First Each Successor.
    for (let i = 0; i < children.length; i++) {
        let child = children[i];
        let result = depth_first_search(child);
        if (result != null) {
            return result;
        }
    }

    //If a Result was not found, return null.
    return null;

}