package domain;


/**
 * A class whose sole purpose is to try and add a player move to a board,
 * and return an instance of itself containing any information derived from
 * the input attemt;
 * @author Axel
 */



public class InputResults
{
    private boolean isSuccess;
    private boolean isVictory = false;
    private int renderSquareId = -1;
    private int renderSymbolId = -1;
    private int victoryLine;
    private int victoryPlayer = 0;
    public InputResults(int[] arr, int squareId, int playerId)
    {
        this.isSuccess = successCheck(arr, squareId);
        if (isSuccess())
        {
            renderSquareId = squareId;
            renderSymbolId = playerId;
            arr[squareId] = playerId;
            this.isVictory = checkVictoryAndSetVictryLine(arr, squareId, playerId);
            if (isVictory())
                victoryPlayer = playerId;
        }

    }
    /*public static InputResults inputPlayerMove(int[] arr, int squareId, int playerId)
    {
       InputResults results = new InputResults();
       results.setSuccess(successCheck(arr, squareId));
       return new InputResults(arr, squareId, playerId);
    }  */
    private boolean successCheck(int[] arr, int squareId)
    {
        if (squareId < 0 || squareId > 8)
            return false;
        else
            return (arr[squareId] == 0);
    }
    private boolean checkVictoryAndSetVictryLine(int[] arr, int squareId, int playerId)
    {
        int a = squareId%3;
        int b = squareId-a;
        if (arr[0+a] == arr[3+a] && arr[3+a] == arr[6+a])
        {
            this.victoryLine = a;
            return true;
        }
        else if (arr[0+b] == arr[1+b] && arr[1+b] == arr[2+b])
        {
            this.victoryLine = 3+(b/3);
            return true;
        }
        else if (squareId == 0 || squareId == 4 || squareId == 8)
        {
            if (arr[0] == arr[4] && arr[4] == arr[8])
            {
                this.victoryLine = 6;
                return true;
            }
        }
        else if (squareId == 2 || squareId == 4 || squareId == 6)
        {
            if(arr[2] == arr[4] && arr[4] == arr[6])
            {
                this.victoryLine = 7;
                return true;
            }

        }
        return false;
    }

    public boolean isSuccess() {
        return isSuccess;
    }

    public void setSuccess(boolean success) {
        isSuccess = success;
    }

    public boolean isVictory() {
        return isVictory;
    }

    public void setVictory(boolean victory) {
        isVictory = victory;
    }

    public int getRenderSquareId() {
        return renderSquareId;
    }

    public void setRenderSquareId(int renderSquareId) {
        this.renderSquareId = renderSquareId;
    }

    public int getRenderSymbolId() {
        return renderSymbolId;
    }

    public void setRenderSymbolId(int renderSymbolId) {
        this.renderSymbolId = renderSymbolId;
    }

    public int getVictoryPlayer() {
        return victoryPlayer;
    }

    public void setVictoryPlayer(int victoryPlayer) {
        this.victoryPlayer = victoryPlayer;
    }

    public int getVictoryLine() {
        return victoryLine;
    }

    public void setVictoryLine(int victoryLine) {
        this.victoryLine = victoryLine;
    }
}
