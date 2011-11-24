package domain;

import org.h2.util.New;
import org.hamcrest.core.Is;

/**
 * A class whose sole purpose is to try and add a player move to a board,
 * and return an instance of itself containing any information derived from
 * the input attemt;
 */
public class InputResults
{
    private boolean isSuccess;
    private boolean isVictory;
    private int renderSquareId;
    private int renderSymbolId;
    private int victoryRow;
    private int victoryPlayer;
    private InputResults(boolean isSuccess, boolean isVictory, int renderSquareId,
                         int renderSymbolId, int victoryRow, int victoryPlayer)
    {

    }
    public static InputResults inputPlayerMove(int[] arr, int squareId)
    {
       return null;
    }
}
