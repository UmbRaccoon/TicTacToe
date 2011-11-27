package dataSource;

import java.lang.reflect.Array;
import java.util.Date;

/**
 * The a DTO for 2player game boards and info connected to them.
 */
public class BoardDTO
{
    int nextPlayerId = 1;
    boolean isActive;
    private int[] board;
    private Date lastMove;

    public BoardDTO()
    {
        board = new int[9];
    }

    public int[] getBoard() {
        return board;
    }

    public void setBoard(int[] board) {
        this.board = board;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public Date getLastMove() {
        return lastMove;
    }

    public void setLastMove(Date lastMove) {
        this.lastMove = lastMove;
    }
    public void addMove(int squareId)
    {
        this.board[squareId] = nextPlayerId;
        nextPlayerId = ((nextPlayerId%2)+1);
    }

    public int getNextPlayerId() {
        return nextPlayerId;
    }
}
