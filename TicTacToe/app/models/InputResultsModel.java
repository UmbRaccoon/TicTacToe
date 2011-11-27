package models;

import domain.InputResults;
import play.mvc.Scope;


/**
 * Created by IntelliJ IDEA.
 * @Author Axel Gauti Guðmundsson - axelg10
 * Date: 26.11.2011
 * Time: 14:20
 */
public class InputResultsModel
{
    public static InputResults updateSessionBoardAndReturnResults(int squareId, Scope.Session scope)
    {

        String sessionBoard = scope.get("board");
        int[] arr = new int[9];

        for (int i = 0; i < 9; i++)
        {
            arr[i] = Character.getNumericValue(sessionBoard.charAt(i));
        }
        int playerId = Character.getNumericValue(sessionBoard.charAt(9));

        InputResults results = new InputResults(arr, squareId, playerId);

        if (results.isSuccess())
        {
            arr[squareId] = playerId;
            String toSession = "";
            for (int i = 0; i < 9; i++)
                toSession += Integer.toString(arr[i]);
            toSession += Integer.toString((playerId%2)+1);
            scope.put("board", toSession);
        }
        return results;
    }
    public static String resultsToJson(InputResults results)
    {
        String jsonString = "{\"isSuccess\":"+results.isSuccess()+"," +
                             "\"isVictory\":"+results.isVictory()+"," +
                             "\"renderSquareId\":"+results.getRenderSquareId()+"," +
                             "\"renderSymbolId\":"+results.getRenderSymbolId()+"," +
                             "\"victoryLine\":"+results.getVictoryLine()+"," +
                             "\"victoryPlayer\":"+results.getVictoryPlayer()+"}";
        return jsonString;
    }


}
